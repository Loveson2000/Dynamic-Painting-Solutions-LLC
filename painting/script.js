document.addEventListener('DOMContentLoaded', function() {
    // Initialize Glide.js carousel
    new Glide('.glide', {
        type: 'carousel',
        perView: 5,
        focusAt: 'center',
        autoplay: 3000,
        arrows: {
            prev: '.glide__arrow--left',
            next: '.glide__arrow--right',
        },
    }).mount();

    // Form validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="Dynapas.infos@gmail.com"]');
        const messageTextarea = document.querySelector('textarea[name="message"]');
        const errorContainer = document.getElementById('error-container');

        // Reset previous error messages
        errorContainer.innerHTML = '';

        // Validate name
        if (!nameInput.value.trim()) {
            displayError('Please enter your name.');
            event.preventDefault();
        }

        // Validate email
        if (!isValidEmail(emailInput.value.trim())) {
            displayError('Please enter a valid email address.');
            event.preventDefault();
        }

        // Validate message
        if (!messageTextarea.value.trim()) {
            displayError('Please enter your message.');
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(message) {
        const errorContainer = document.getElementById('error-container');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        errorContainer.appendChild(errorMessage);
    }
});