// script.js - Handles interactivity for The Horizon International School website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with ID ${targetId} not found.`); // Error handling
    }
  });
});

// Gallery lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  } else {
    console.error('Lightbox elements not found.');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
  }
}

// Contact form submission (demo; replace with backend API)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo only - integrate with backend for production)');
    // Example: Send data to server
    // fetch('/api/contact', { method: 'POST', body: new FormData(this) });
  });
} else {
  console.error('Contact form not found.');
}
