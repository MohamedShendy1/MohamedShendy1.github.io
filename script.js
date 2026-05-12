document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Reveal on scroll logic
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    // Navbar theme switch
    const handleNavbar = () => {
        if (window.scrollY > window.innerHeight - 80) {
            navbar.style.background = "rgba(0,0,0,0.8)";
            navbar.style.backdropFilter = "blur(15px)";
            logo.style.color = "#fff";
            navLinks.forEach(link => link.style.color = "#fff");
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            logo.style.color = "#000";
            navLinks.forEach(link => link.style.color = "#333");
        }
    };

    window.addEventListener("scroll", () => {
        revealOnScroll();
        handleNavbar();
    });

    revealOnScroll();
    handleNavbar();
});
