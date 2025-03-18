// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
        });
    });

    // Form submission (basic example)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        form.reset();
    });

    // CTA button scroll to portfolio
    const ctaButton = document.querySelector('.home .cta-button');
    ctaButton.addEventListener('click', () => {
        document.querySelector('#portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });
});