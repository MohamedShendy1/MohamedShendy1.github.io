// AOS Animation Init
AOS.init({ duration: 1000, once: true });

// Typewriter Setup
const textElement = document.getElementById('typewriter');
const phrases = [
    'Senior iOS Developer',
    'SwiftUI & Architecture Specialist',
    'Modular Design Expert'
];

let pIndex = 0, cIndex = 0, isDeleting = false;

function typeEffect() {
    const current = phrases[pIndex];
    textElement.textContent = isDeleting ? current.substring(0, cIndex--) : current.substring(0, cIndex++);
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && cIndex === current.length) { 
        speed = 2000; 
        isDeleting = true; 
    } else if (isDeleting && cIndex === 0) { 
        isDeleting = false; 
        pIndex = (pIndex + 1) % phrases.length; 
        speed = 500; 
    }
    setTimeout(typeEffect, speed);
}

// Project Detail Data
const projectData = {
    ezeats: {
        title: "EZeats",
        description: "A comprehensive multi-vendor food-tech platform serving over 45,000 users. Features include QR-code ordering and real-time delivery tracking.",
        images: ["ezeats1.jpg", "ezeats2.jpg", "ezeats3.jpg"],
        skills: ["SwiftUI", "SwiftData", "MVVM-C"]
    },
    drovox: {
        title: "Drovox Hero",
        description: "Premium ride-hailing ecosystem featuring real-time GPS tracking, multi-vehicle management, and fuel credit systems.",
        images: ["drovox1.jpg", "drovox2.jpg"],
        skills: ["UIKit", "CoreLocation", "Google Maps"]
    }
};

function openProject(id) {
    const p = projectData[id];
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <h2>${p.title}</h2>
        <div class="project-preview-scroll" style="height: 400px; margin: 20px 0;">
            ${p.images.map(img => `<img src="${img}" style="height: 100%; width: auto; min-width: 100%;">`).join('')}
        </div>
        <p style="font-size: 1.1rem; line-height: 1.6;">${p.description}</p>
        <div class="tags" style="margin-top: 20px;">
            ${p.skills.map(s => `<span>${s}</span>`).join('')}
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProject() {
    document.getElementById('project-modal').style.display = "none";
    document.body.style.overflow = "auto";
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

// Close modal on background click
window.onclick = (e) => { if (e.target == document.getElementById('project-modal')) closeProject(); }
