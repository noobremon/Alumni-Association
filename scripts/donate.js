document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const eventType = document.getElementById('event').value;

  
    window.location.href = 'donatety.html';
});