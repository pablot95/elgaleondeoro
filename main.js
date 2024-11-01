



document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Previene el envío tradicional del formulario


    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "5491151613549";

    const whatsappMessage = `Hola, mi nombre es ${name}. \n\n${message}`;


    const encodedMessage = encodeURIComponent(whatsappMessage);


    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


    window.open(whatsappURL, "_blank");
});



document.getElementById("contactForm2").addEventListener("submit", function(event){
    event.preventDefault(); // Previene el envío tradicional del formulario


    const name2 = document.getElementById("name2").value;
    const message2 = document.getElementById("message2").value;

    const phoneNumber2 = "5491151613549";

    const whatsappMessage2 = `Hola, mi nombre es ${name2}. \n\n${message2}`;


    const encodedMessage2 = encodeURIComponent(whatsappMessage2);


    const whatsappURL2 = `https://wa.me/${phoneNumber2}?text=${encodedMessage2}`;


    window.open(whatsappURL2, "_blank");
});






var rellax = new Rellax('.rellax');


const animatedElements = document.querySelectorAll('.titulo');

// Configura el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__zoomIn', 'visible');
            
            // Deja de observar el elemento una vez que la animación se ha activado
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // El 50% del elemento debe estar visible

// Aplica el observer a cada elemento animado
animatedElements.forEach(element => {
    observer.observe(element);
});



const animatedElements2 = document.querySelectorAll('.video');

// Configura el IntersectionObserver
const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__zoomIn', 'visible');
            
            // Deja de observar el elemento una vez que la animación se ha activado
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.00001 }); // El 50% del elemento debe estar visible

// Aplica el observer a cada elemento animado
animatedElements2.forEach(element => {
    observer2.observe(element);
});

const animatedElements3 = document.querySelectorAll('.servicios');

// Configura el IntersectionObserver
const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__fadeInUp', 'visible', 'animate__animated');
            
            // Deja de observar el elemento una vez que la animación se ha activado
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.00001 }); // El 50% del elemento debe estar visible

// Aplica el observer a cada elemento animado
animatedElements3.forEach(element => {
    observer3.observe(element);
});



const fixedForm = document.querySelector('.formulariofix');
const targetSection = document.querySelector('.form');

// Configura el IntersectionObserver
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si la sección objetivo es visible, oculta el formulario
            fixedForm.classList.add('hidden');
        } else {
            // Muestra el formulario nuevamente cuando la sección no esté visible
            fixedForm.classList.remove('hidden');
        }
    });
}, { threshold: 0.1 }); // Opcional: ajusta el umbral para activar la ocultación antes

// Aplica el observer a la sección objetivo
observer4.observe(targetSection);




const animatedElements5 = document.querySelectorAll('.a');

// Configura el IntersectionObserver
const observer5 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__zoomIn', 'visible');
            
            // Deja de observar el elemento una vez que la animación se ha activado
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.00001 }); // El 50% del elemento debe estar visible

// Aplica el observer a cada elemento animado
animatedElements5.forEach(element => {
    observer5.observe(element);
});

const animatedElements6 = document.querySelectorAll('.highlightm');

// Configura el IntersectionObserver
const observer6 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__fadeIn', 'visible');
            
            // Deja de observar el elemento una vez que la animación se ha activado
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.00001 }); // El 50% del elemento debe estar visible

// Aplica el observer a cada elemento animado
animatedElements6.forEach(element => {
    observer6.observe(element);
});

const swiper = new Swiper('.swiper-container', {
    loop: true, // Para que el carrusel se repita
    autoplay: {
        delay: 3000, // Tiempo entre cada slide (en ms)
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Número de slides visibles a la vez
    spaceBetween: 0, // Espacio entre cada slide
});