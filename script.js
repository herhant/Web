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
        navbar.style.opacity = "1"; 
    });

    // Evento al quitar el cursor de la navbar (mouseout)
    navbar.addEventListener('mouseout', () => {
        if (window.scrollY > 0) {
            navbar.style.opacity = "0.6";
        }
    });
});

/* Animación inicio */

window.addEventListener('load', () => {
    animarElementos();
});

window.addEventListener('scroll', () => {
    animarElementos();
});

function animarElementos() {
    const img = document.querySelector('.animarimg');
    const texto = document.querySelector('.animarp');

    const imgPosition = img.getBoundingClientRect().top;
    const textoPosition = texto.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Si la imagen está en el viewport, añadir la clase 'in-view'
    if (imgPosition < screenPosition && imgPosition > 0) {
        img.classList.add('in-view');
    } else {
        // Si la imagen ya no está visible, remover la clase 'in-view'
        img.classList.remove('in-view');
    }

    // Si el párrafo está en el viewport, añadir la clase 'in-view'
    if (textoPosition < screenPosition && textoPosition > 0) {
        texto.classList.add('in-view');
    } else {
        // Si el párrafo ya no está visible, remover la clase 'in-view'
        texto.classList.remove('in-view');
    }
}


/* Animación separador*/

