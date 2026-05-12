// ==========================================
// Portfolio Loaded
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("Mohamed Shendy Portfolio Loaded");
});

// ==========================================
// Smooth Scroll Active Links
// ==========================================

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if(targetSection) {

      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });

    }

  });

});

// ==========================================
// Navbar Background On Scroll
// ==========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50) {

    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

  } else {

    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.06)";
  }

});

// ==========================================
// Fade In Animation On Scroll
// ==========================================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting) {

      entry.target.classList.add('show');

    }

  });

}, {
  threshold: 0.2
});

const hiddenElements = document.querySelectorAll('.project-card, .about-right, .about-left');

hiddenElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
