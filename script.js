document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            if (href === 'jokes.html') {
                window.location.href = href;
            } else {
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
