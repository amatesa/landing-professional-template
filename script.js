document.addEventListener("DOMContentLoaded", () => {
  // Inicializar animaciones de Scroll
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: "ease-out-expo",
      once: true,
      offset: 100
    });
  }

  // Suavizado de scroll para los links del menú
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
