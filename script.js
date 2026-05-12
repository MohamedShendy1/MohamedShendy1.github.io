document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("active");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    
    // Check once on load
    revealOnScroll();

    // Small Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(255,255,255,0.9)";
            navbar.style.backdropFilter = "blur(10px)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
        }
    });
});
