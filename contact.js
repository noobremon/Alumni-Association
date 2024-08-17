function showFacebook() {
    document.getElementById('platform-content').innerHTML = `
        <h2>Connect with us on Facebook</h2>
        <p>Like our page and stay updated with our latest news!</p>
        <iframe src="https://www.facebook.com" width="100%" height="300px"></iframe>
    `;
}

function showTwitter() {
    document.getElementById('platform-content').innerHTML = `
        <h2>Follow us on Twitter</h2>
        <p>Join the conversation and tweet with us!</p>
        <iframe src="https://twitter.com" width="100%" height="300px"></iframe>
    `;
}

function showLinkedin() {
    document.getElementById('platform-content').innerHTML = `
        <h2>Connect with us on LinkedIn</h2>
        <p>Let's network and grow together!</p>
        <iframe src="https://www.linkedin.com" width="100%" height="300px"></iframe>
    `;
}

function goBack() {
    document.getElementById('platform-content').innerHTML = '';
}
