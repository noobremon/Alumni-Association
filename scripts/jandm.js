

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        form.reset();
    });

   
});
