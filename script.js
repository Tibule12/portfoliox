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
                behavior: 'smooth',
                block: 'start'  // Ensures smooth scrolling starts at the top of the section
            });
            navMenu.classList.remove('active');  // Close the mobile menu after clicking
        });
    });

    // Form submission (basic example with validation)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        
        if (!name.value || !email.value || !message.value) {
            alert('Please fill out all fields!');
            return; // Stop the form from submitting if any field is empty
        }

        alert('Message sent! (This is a demo)');
        form.reset(); // Reset form fields after submission
    });

    // Scroll to Portfolio on CTA button click
    const ctaButton = document.querySelector('.home .cta-button');
    ctaButton.addEventListener('click', () => {
        document.querySelector('#project').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Aesthetic Scroll Reveal Animation (for sections)
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect();
            if (sectionPosition.top < window.innerHeight - 100) {
                section.classList.add('reveal');
            } else {
                section.classList.remove('reveal');
            }
        });
    });

});
