ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.accordion-item,.about-intro,.right', { origin: 'right' });
ScrollReveal().reveal('.about-img,.quote, .left', { origin: 'left' });
ScrollReveal().reveal('.heading', { origin: 'top' });



var element = document.querySelectorAll('.nav-item');
element.forEach(ele =>{
    ele.onclick =()=>{
        element.forEach(el => el.classList.remove('linkcolor'));
        ele.classList.toggle('linkcolor');
    }
})