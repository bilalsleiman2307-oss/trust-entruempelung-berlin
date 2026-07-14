const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileSubmenuButton = document.querySelector("[data-mobile-submenu-button]");
const mobileSubmenu = document.querySelector("[data-mobile-submenu]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

if (mobileSubmenuButton && mobileSubmenu) {
  mobileSubmenuButton.addEventListener("click", () => {
    const isOpen = mobileSubmenuButton.getAttribute("aria-expanded") === "true";
    mobileSubmenuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileSubmenu.classList.toggle("is-open", !isOpen);
  });
}

const FORM_ENDPOINT_PLACEHOLDER = "FORMULAR_ID_EINTRAGEN";
const MIN_FORM_TIME_MS = 3000;
const formPageLoadedAt = Date.now();

function showFormStatus(statusElement, message, type) {
  if (!statusElement) {
    return;
  }

  statusElement.textContent = message;
  statusElement.classList.remove("is-success", "is-error");
  statusElement.classList.add("is-visible", type === "success" ? "is-success" : "is-error");
  statusElement.setAttribute("role", type === "success" ? "status" : "alert");
  statusElement.focus({ preventScroll: false });
}

document.querySelectorAll("[data-static-form]").forEach((form) => {
  const statusElement = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : "";
  const endpoint = form.dataset.formEndpoint || form.getAttribute("action") || "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (statusElement) {
      statusElement.textContent = "";
      statusElement.classList.remove("is-visible", "is-success", "is-error");
    }

    if (endpoint.includes(FORM_ENDPOINT_PLACEHOLDER)) {
      console.warn("Formspree endpoint fehlt. Hier die echte Formspree-Formular-ID eintragen.");
      showFormStatus(
        statusElement,
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        "error"
      );
      return;
    }

    if (Date.now() - formPageLoadedAt < MIN_FORM_TIME_MS) {
      showFormStatus(
        statusElement,
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        "error"
      );
      return;
    }

    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value.trim() !== "") {
      showFormStatus(
        statusElement,
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        "error"
      );
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Wird gesendet ...";
    }
    form.classList.add("is-sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form request failed");
      }

      form.reset();
      showFormStatus(
        statusElement,
        "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich.",
        "success"
      );
    } catch (error) {
      showFormStatus(
        statusElement,
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        "error"
      );
    } finally {
      form.classList.remove("is-sending");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
});
