document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');

            if (targetPage) {
                history.pushState(null, '', targetPage);
                fetchPage(targetPage);
            }
        });
    });

    window.addEventListener('popstate', function () {
        fetchPage(location.pathname);
    });

    function fetchPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            })
            .catch(err => console.error('Error loading page:', err));
    }
});
function navigateTo(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    const selectedPage = document.getElementById(page);
    selectedPage.style.display = 'block';
    selectedPage.classList.add('active');

    window.history.pushState({page: page}, "", `#${page}`);
}

window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        navigateTo(event.state.page);
    } else {
        navigateTo('home');
    }
};

// Load the initial page based on URL hash
document.addEventListener("DOMContentLoaded", function() {
    const page = window.location.hash.substring(1) || 'home';
    navigateTo(page);
});
