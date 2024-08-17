document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login-box");
    const signupBox = document.getElementById("signup-box");

    const showSignupLink = document.getElementById("show-signup");
    const showLoginLink = document.getElementById("show-login");

    // Show sign-up box
    showSignupLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginBox.classList.remove("active");
        signupBox.classList.add("active");
    });

    // Show login box
    showLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    // Handle login
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Simple check to see if the user is signing in for the first time
        if (localStorage.getItem("username") === username && localStorage.getItem("password") === password) {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to main page
        } else {
            alert("Invalid username or password. Please try again or sign up.");
        }
    });

    // Handle sign-up
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        // Save user credentials (for demo purposes, this is very simple and not secure)
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Sign-up successful! You can now log in.");
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    // Show the login box by default
    loginBox.classList.add("active");
});
