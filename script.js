document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu-bar');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle mobile menu
    menuBar.addEventListener('click', function() {
        menuBar.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 