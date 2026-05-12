document.addEventListener("DOMContentLoaded", () => {
    // ---------- REVEAL ON SCROLL ----------
    const revealElements = document.querySelectorAll('.reveal');
    const bioSection = document.querySelector('#about');

    const revealOnScroll = () => {
        for (let el of revealElements) {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 120;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        }
        // Special for about section if needed
        if (bioSection && bioSection.getBoundingClientRect().top < window.innerHeight - 100) {
            bioSection.classList.add('active');
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ---------- NAVBAR SCROLL EFFECT ----------
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            if (document.body.classList.contains('light-mode')) {
                navbar.style.background = 'rgba(245, 245, 247, 0.85)';
            }
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.6)';
            if (document.body.classList.contains('light-mode')) {
                navbar.style.background = 'rgba(245, 245, 247, 0.7)';
            }
        }
    });

    // ---------- DARK / LIGHT MODE TOGGLE ----------
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
        // update navbar background after toggle while scrolled
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            if (body.classList.contains('light-mode')) {
                navbar.style.background = 'rgba(245, 245, 247, 0.85)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            }
        } else {
            if (body.classList.contains('light-mode')) {
                navbar.style.background = 'rgba(245, 245, 247, 0.7)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.6)';
            }
        }
    });

    // ---------- SHOW MORE PROJECTS BUTTON ----------
    const showMoreBtn = document.getElementById('showMoreProjectsBtn');
    const moreProjectsDiv = document.getElementById('more-projects');
    if (showMoreBtn && moreProjectsDiv) {
        showMoreBtn.addEventListener('click', () => {
            if (moreProjectsDiv.style.display === 'none' || moreProjectsDiv.style.display === '') {
                moreProjectsDiv.style.display = 'block';
                showMoreBtn.innerHTML = 'Show Less Projects <i class="fa-solid fa-arrow-up"></i>';
                // trigger reveal for new projects
                const newProjects = moreProjectsDiv.querySelectorAll('.reveal');
                newProjects.forEach(proj => setTimeout(() => proj.classList.add('active'), 100));
            } else {
                moreProjectsDiv.style.display = 'none';
                showMoreBtn.innerHTML = 'Show More Projects <i class="fa-solid fa-arrow-down"></i>';
            }
        });
    }

    // ---------- EZEATS CAROUSEL (placeholder images) ----------
    let currentEzeatsImage = 1;
    const ezeatsImg = document.getElementById('ezeatsImage');
    const prevBtn = document.getElementById('ezeatsPrev');
    const nextBtn = document.getElementById('ezeatsNext');
    const totalImages = 3;
    const imageBase = 'https://placehold.co/280x560/';
    const imageColors = ['1a1c2c', '2a2e3f', '3a3e5f'];
    const imageTexts = ['EZeats+Order', 'EZeats+Tracking', 'EZeats+Profile'];

    const updateEzeatsImage = () => {
        const color = imageColors[(currentEzeatsImage - 1) % imageColors.length];
        const text = imageTexts[(currentEzeatsImage - 1) % imageTexts.length];
        ezeatsImg.src = `https://placehold.co/280x560/${color}/FFFFFF?text=${text}`;
    };

    if (prevBtn && nextBtn && ezeatsImg) {
        prevBtn.addEventListener('click', () => {
            currentEzeatsImage = currentEzeatsImage > 1 ? currentEzeatsImage - 1 : totalImages;
            updateEzeatsImage();
        });
        nextBtn.addEventListener('click', () => {
            currentEzeatsImage = currentEzeatsImage < totalImages ? currentEzeatsImage + 1 : 1;
            updateEzeatsImage();
        });
        updateEzeatsImage();
    }

    // ---------- CONTACT MODAL ----------
    const modal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactBtn');
    const closeModal = document.querySelector('.close-modal');

    if (contactBtn && modal) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            if (targetId === '#contactBtn') return; // already handled modal
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
