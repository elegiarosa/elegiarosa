/* Elegía Rosa · main.js */
(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  // Menú móvil
  function setMenu(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenu(false); toggle.focus(); }
  });

  // Sombra del encabezado al desplazarse
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Año del pie de página
  document.getElementById('year').textContent = new Date().getFullYear();

  // Formulario de contacto (marcador: conectar a un servicio de envío)
  var form = document.querySelector('.form');
  var status = form.querySelector('.form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Revisa los campos obligatorios antes de enviar.';
      form.querySelector(':invalid').focus();
      return;
    }
    status.textContent = '[Mensaje de confirmación — conectar el formulario a un servicio de envío.]';
    form.reset();
  });
})();
