// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        form.reset();
    });

    // Additional JS functionalities can be added here
});
