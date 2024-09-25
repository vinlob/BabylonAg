// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active');
    hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked (for mobile)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('nav-menu-active')) {
            navMenu.classList.remove('nav-menu-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Employee Interest Form Submission
const form = document.getElementById('interest-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const position = form.position.value.trim();

    if (name && email && position) {
        formMessage.textContent = 'Thank you for your interest!';
        form.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
    }
});
