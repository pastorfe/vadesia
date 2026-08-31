document.addEventListener("DOMContentLoaded", () => {
  const widget = document.querySelector("[data-contact-widget]");
  if (!widget) return;

  const button = widget.querySelector(".floating-contact-button");
  const menu = widget.querySelector(".floating-contact-menu");

  let inactivityTimer;

  const hideWhileMoving = () => {
    widget.classList.add("is-scroll-hidden");
    setOpen(false);
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      widget.classList.remove("is-scroll-hidden");
    }, 3000);
  };

  // Scroll movement in either direction hides the button immediately.
  // It fades back in only after movement has stopped.
  window.addEventListener("scroll", hideWhileMoving, { passive: true });

  // Touch interaction: while the finger is held/moving on the page,
  // keep the button hidden. It returns only after touch activity ends.
  const isContactInteraction = (event) =>
    event.target instanceof Element && widget.contains(event.target);

  const hideDuringTouch = (event) => {
    // Never hide the button while the user is actually pressing the
    // contact control; otherwise pointer-events:none can cancel its click.
    if (isContactInteraction(event)) return;

    widget.classList.add("is-scroll-hidden");
    setOpen(false);
    clearTimeout(inactivityTimer);
  };

  const showAfterTouch = (event) => {
    // A tap on the contact button must remain visible so its click can fire.
    if (isContactInteraction(event)) return;

    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      widget.classList.remove("is-scroll-hidden");
    }, 3000);
  };

  window.addEventListener("touchstart", hideDuringTouch, { passive: true });
  window.addEventListener("touchmove", hideDuringTouch, { passive: true });
  window.addEventListener("touchend", showAfterTouch, { passive: true });
  window.addEventListener("touchcancel", showAfterTouch, { passive: true });

  const setOpen = (open) => {
    if (open) widget.classList.remove("is-scroll-hidden");
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"
    );
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    widget.classList.remove("is-scroll-hidden");
    clearTimeout(inactivityTimer);
    setOpen(!menu.classList.contains("open"));
  });

  document.addEventListener("click", (event) => {
    if (!widget.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      button.focus();
    }
  });

  // Los datos reales de contacto se añadirán cuando estén definidos.
  menu.querySelectorAll("[data-contact]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});
