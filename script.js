// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Close nav on link click (mobile)
  document.querySelectorAll('.main-nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (body.classList.contains("nav-open")) {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
