<?php
// Nicht mehr verwendet: GitHub Pages fuehrt PHP nicht aus. Das statische Formular nutzt den Formspree-Endpunkt in scripts/build-site.mjs.
declare(strict_types=1);

const RECIPIENT_EMAIL = 'entruempelung@trust-bm-service.de';
const MAX_UPLOAD_BYTES = 8000000;
const MAX_TOTAL_UPLOAD_BYTES = 18000000;

function clean_text(string $value, int $maxLength = 4000): string
{
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength);
}

function clean_header(string $value): string
{
    return str_replace(["\r", "\n"], '', clean_text($value, 180));
}

function render_response(string $title, string $message, int $status = 200): never
{
    http_response_code($status);
    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    echo '<!doctype html><html lang="de"><head><meta charset="utf-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
    echo '<title>' . $safeTitle . ' | Trust Entrümpelung Berlin</title>';
    echo '<link rel="stylesheet" href="/assets/css/styles.css?v=design-mix-5">';
    echo '</head><body><main><section class="hero"><div class="container-wide hero-shell">';
    echo '<div class="hero-grid"><div><span class="eyebrow">Anfrageformular</span>';
    echo '<h1>' . $safeTitle . '</h1><p class="lead">' . $safeMessage . '</p>';
    echo '<div class="hero-actions"><a class="button button-primary" href="/">Zur Startseite</a>';
    echo '<a class="button button-secondary" href="/kontakt/">Zur Kontaktseite</a></div>';
    echo '</div></div></div></section></main></body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    render_response('Formular nicht gesendet', 'Bitte nutzen Sie das Anfrageformular auf der Website.', 405);
}

if (!empty($_POST['website'] ?? '')) {
    render_response('Vielen Dank für Ihre Anfrage', 'Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.');
}

$name = clean_text($_POST['name'] ?? '', 160);
$phone = clean_text($_POST['phone'] ?? '', 120);
$email = clean_header($_POST['email'] ?? '');
$area = clean_text($_POST['area'] ?? '', 240);
$service = clean_text($_POST['service'] ?? '', 180);
$floor = clean_text($_POST['floor'] ?? '', 180);
$date = clean_text($_POST['date'] ?? '', 180);
$message = clean_text($_POST['message'] ?? '', 5000);
$sourcePage = clean_text($_POST['source_page'] ?? '', 220);

if ($name === '' || $phone === '' || $message === '') {
    render_response('Angaben fehlen', 'Bitte geben Sie mindestens Name, Telefonnummer und eine kurze Beschreibung an.', 422);
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    render_response('E-Mail-Adresse prüfen', 'Bitte geben Sie eine gültige E-Mail-Adresse ein oder lassen Sie das Feld leer.', 422);
}

$subject = 'Neue Anfrage Trust Entrümpelung Berlin';
$bodyLines = [
    'Neue Anfrage über trust-entruempelung-berlin.de',
    '',
    'Name: ' . $name,
    'Telefon: ' . $phone,
    'E-Mail: ' . ($email !== '' ? $email : 'nicht angegeben'),
    'Bezirk / Adresse: ' . ($area !== '' ? $area : 'nicht angegeben'),
    'Leistung: ' . ($service !== '' ? $service : 'nicht angegeben'),
    'Etage / Fahrstuhl: ' . ($floor !== '' ? $floor : 'nicht angegeben'),
    'Wunschtermin: ' . ($date !== '' ? $date : 'nicht angegeben'),
    'Seite: ' . ($sourcePage !== '' ? $sourcePage : 'nicht angegeben'),
    '',
    'Kurzbeschreibung:',
    $message,
];

$headers = [
    'From: Trust Entrümpelung Berlin <' . RECIPIENT_EMAIL . '>',
    'Reply-To: ' . ($email !== '' ? $email : RECIPIENT_EMAIL),
    'X-Mailer: PHP/' . phpversion(),
];

$attachments = [];
$totalUploadBytes = 0;

if (!empty($_FILES['photos']) && is_array($_FILES['photos']['name'])) {
    $allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
    $fileCount = count($_FILES['photos']['name']);

    for ($i = 0; $i < $fileCount; $i++) {
        if (($_FILES['photos']['error'][$i] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
            continue;
        }

        if ($_FILES['photos']['error'][$i] !== UPLOAD_ERR_OK) {
            render_response('Upload prüfen', 'Eine Datei konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut.', 422);
        }

        $size = (int) $_FILES['photos']['size'][$i];
        $totalUploadBytes += $size;

        if ($size > MAX_UPLOAD_BYTES || $totalUploadBytes > MAX_TOTAL_UPLOAD_BYTES) {
            render_response('Dateien zu groß', 'Bitte senden Sie weniger oder kleinere Dateien. Einzelne Dateien dürfen maximal 8 MB groß sein.', 422);
        }

        $tmpName = $_FILES['photos']['tmp_name'][$i];
        $mimeType = mime_content_type($tmpName) ?: 'application/octet-stream';

        if (!in_array($mimeType, $allowedTypes, true)) {
            render_response('Dateityp nicht erlaubt', 'Bitte laden Sie nur Bilder oder PDF-Dateien hoch.', 422);
        }

        $attachments[] = [
            'path' => $tmpName,
            'name' => basename((string) $_FILES['photos']['name'][$i]),
            'type' => $mimeType,
        ];
    }
}

if ($attachments === []) {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $sent = mail(RECIPIENT_EMAIL, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));
} else {
    $boundary = 'trust-' . bin2hex(random_bytes(16));
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

    $mailBody = '--' . $boundary . "\r\n";
    $mailBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mailBody .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $mailBody .= implode("\n", $bodyLines) . "\r\n\r\n";

    foreach ($attachments as $attachment) {
        $fileContent = chunk_split(base64_encode((string) file_get_contents($attachment['path'])));
        $fileName = str_replace(['"', "\r", "\n"], '', $attachment['name']);
        $mailBody .= '--' . $boundary . "\r\n";
        $mailBody .= 'Content-Type: ' . $attachment['type'] . '; name="' . $fileName . '"' . "\r\n";
        $mailBody .= "Content-Transfer-Encoding: base64\r\n";
        $mailBody .= 'Content-Disposition: attachment; filename="' . $fileName . '"' . "\r\n\r\n";
        $mailBody .= $fileContent . "\r\n";
    }

    $mailBody .= '--' . $boundary . "--\r\n";
    $sent = mail(RECIPIENT_EMAIL, $subject, $mailBody, implode("\r\n", $headers));
}

if (!$sent) {
    render_response('Anfrage konnte nicht gesendet werden', 'Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.', 500);
}

render_response('Vielen Dank für Ihre Anfrage', 'Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen zurück.');
