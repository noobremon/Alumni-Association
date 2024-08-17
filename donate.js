document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const eventType = document.getElementById('event').value;

    // Here you can handle the donation logic, e.g., sending data to a server
    // For demonstration, we'll just redirect to the thank you page
    window.location.href = 'donatety.html';
});