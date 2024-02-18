ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.accordion-item,.about-intro,.right', { origin: 'right' });
ScrollReveal().reveal('.about-img,.quote, .left', { origin: 'left' });
ScrollReveal().reveal('.heading', { origin: 'top' });