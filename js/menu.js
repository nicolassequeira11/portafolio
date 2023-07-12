
const ham = document.querySelector('.navbar-toggler');
const enlaces = document.querySelector('.navbar-collapse');

ham.addEventListener('click', () => {
    
    enlaces.classList.toggle('activado');

});