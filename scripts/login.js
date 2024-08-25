document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login-box");
    const signupBox = document.getElementById("signup-box");

    const showSignupLink = document.getElementById("show-signup");
    const showLoginLink = document.getElementById("show-login");

   
    showSignupLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginBox.classList.remove("active");
        signupBox.classList.add("active");
    });

    
    showLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        
        if (localStorage.getItem("username") === username && localStorage.getItem("password") === password) {
            alert("Login successful!");
            window.location.href = "index.html"; 
        } else {
            alert("Invalid username or password. Please try again or sign up.");
        }
    });

   
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Sign-up successful! You can now log in.");
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    
    loginBox.classList.add("active");
});
