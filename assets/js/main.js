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
