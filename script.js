// Initialize AOS Animations
AOS.init({ duration: 1000, once: true });

// Project Database from CV
const projectData = {
    ezeats: {
        title: "EZeats",
        description: "Multi-vendor food-tech ecosystem serving 45,000+ users. Features QR-code ordering, dual payment gateway integration (Paymob, Kashier), and real-time delivery tracking via RoBoost API.",
        images: ["ezeats1.jpg", "ezeats2.jpg", "ezeats3.jpg"],
        skills: ["SwiftUI", "SwiftData", "MVVM-C", "FinTech"]
    },
    drovox: {
        title: "Drovox & Drovox Hero",
        description: "Premium ride-hailing ecosystem with rider and driver apps. Includes real-time GPS tracking, multi-vehicle management, and fuel credit systems.",
        images: ["drovox1.jpg", "drovox2.jpg", "drovox3.jpg"],
        skills: ["UIKit", "CoreLocation", "Google Maps SDK", "Real-Time Tracking"]
    },
    mat7anty: {
        title: "Mat7anty",
        description: "Fast-commerce delivery platform for Kuwaiti mills with KNET payment integration and sub-40-minute delivery optimization.",
        images: ["mat7anty1.jpg", "mat7anty2.jpg"],
        skills: ["UIKit", "MVP", "KNET Integration", "Geolocation"]
    }
};

// Open Project Detail Modal
function openProject(id) {
    const project = projectData[id];
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <h2 style="margin-bottom: 20px;">${project.title}</h2>
        <div class="project-preview-scroll" style="height: 400px; margin-bottom: 30px;">
            ${project.images.map(img => `<img src="${img}" style="height: 100%; width: auto; min-width: 100%;">`).join('')}
        </div>
        <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">${project.description}</p>
        <div class="skills-grid" style="margin-top: 30px;">
            ${project.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
        </div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close Modal
function closeProject() {
    document.getElementById('project-modal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Close on background click
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) closeProject();
}

// Typewriter Effect
const textElement = document.getElementById('typewriter');
const phrases = ['Senior iOS Engineer', 'SwiftUI Specialist', 'Modular Architecture Expert'];
let pIndex = 0, cIndex = 0, isDeleting = false;

function typeEffect() {
    const current = phrases[pIndex];
    textElement.textContent = isDeleting ? current.substring(0, cIndex--) : current.substring(0, cIndex++);
    
    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && cIndex === current.length) { speed = 2000; isDeleting = true; }
    else if (isDeleting && cIndex === 0) { isDeleting = false; pIndex = (pIndex + 1) % phrases.length; speed = 500; }
    setTimeout(typeEffect, speed);
}

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

document.addEventListener('DOMContentLoaded', typeEffect);
