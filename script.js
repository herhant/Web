document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector("header");

    // Función para manejar el cambio de opacidad al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.style.opacity = "0.6";
        } else {
            navbar.style.opacity = "1";
        }
    });

    // Evento al pasar el cursor sobre la navbar (hover)
    navbar.addEventListener('mouseover', () => {
        navbar.style.opacity = "1"; // Opacidad completa al hacer hover
    });

    // Evento al quitar el cursor de la navbar (mouseout)
    navbar.addEventListener('mouseout', () => {
        if (window.scrollY > 0) {
            navbar.style.opacity = "0.6";
        }
    });
});
