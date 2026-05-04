const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

const mensajeBtn = document.getElementById('mensajeBtn');
const mensajeEquipo = document.getElementById('mensajeEquipo');

if (mensajeBtn && mensajeEquipo) {
  mensajeBtn.addEventListener('click', () => {
    mensajeEquipo.textContent = '¡Bienvenido/a! Somos Jonatan y Marisol. Este sitio fue construido para presentar al equipo y documentar el proceso del TP1.';
  });
}

const toggleInfo = document.getElementById('toggleInfo');
const extraInfo = document.getElementById('extraInfo');

if (toggleInfo && extraInfo) {
  toggleInfo.addEventListener('click', () => {
    extraInfo.classList.toggle('show');
    toggleInfo.textContent = extraInfo.classList.contains('show')
      ? 'Ocultar intereses'
      : 'Mostrar/Ocultar intereses';
  });
}

const changeColor = document.getElementById('changeColor');
const profileCard = document.getElementById('profileCard');

if (changeColor && profileCard) {
  changeColor.addEventListener('click', () => {
    profileCard.classList.toggle('alt-card-color');
  });
}
