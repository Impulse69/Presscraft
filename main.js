// Navigation handling
const navLinks = {
    services: document.getElementById('nav-services'),
    portfolio: document.getElementById('nav-portfolio'),
    testimonials: document.getElementById('nav-testimonials'),
    contact: document.getElementById('nav-contact')
};

const mobileNavLinks = {
    services: document.getElementById('mobile-nav-services'),
    portfolio: document.getElementById('mobile-nav-portfolio'),
    testimonials: document.getElementById('mobile-nav-testimonials'),
    contact: document.getElementById('mobile-nav-contact')
};

// Function to handle smooth scrolling
function scrollToSection(sectionId) {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Add click handlers for desktop navigation
Object.entries(navLinks).forEach(([key, link]) => {
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(`#${key}`);
        });
    }
});

// Add click handlers for mobile navigation
Object.entries(mobileNavLinks).forEach(([key, link]) => {
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(`#${key}`);
            // Close mobile menu after clicking
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navToggle) {
                navMenu.classList.remove('show-menu');
                navToggle.classList.remove('active');
            }
        });
    }
});

// Mobile menu functionality
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

// Show/hide menu with animation
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    }
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear()

// Services slideshow
const slideshowImages = [
  'assets/images/slideshow/logo.png',
  'assets/images/slideshow/invitations.jpg',
  'assets/images/slideshow/car livery.jpg',
  'assets/images/slideshow/shirt.jpg',
  'assets/images/slideshow/brochure.jpg',
  'assets/images/slideshow/printing.jpg',
  'assets/images/slideshow/key fobs.jpg',
  'assets/images/slideshow/wepik-export.png',
  // Add more as needed
];
let slideshowIndex = 0;
const slideshowEl = document.getElementById('services-slideshow');
if (slideshowEl) {
  setInterval(() => {
    slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
    slideshowEl.style.opacity = 0;
    setTimeout(() => {
      slideshowEl.src = slideshowImages[slideshowIndex];
      slideshowEl.style.opacity = 1;
    }, 400);
  }, 3000);
}

// Card transitions
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#testimonials article');
  const inputs = document.querySelectorAll('#testimonials input[type="radio"]');
  
  function updateCards() {
    const activeIndex = Array.from(inputs).findIndex(input => input.checked);
    
    cards.forEach((card, index) => {
      card.classList.remove('active', 'prev', 'next');
      
      if (index === activeIndex) {
        card.classList.add('active');
      } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
        card.classList.add('prev');
      } else if (index === (activeIndex + 1) % cards.length) {
        card.classList.add('next');
      }
    });
  }
  
  // Initialize cards
  updateCards();
  
  // Update on radio change
  inputs.forEach(input => {
    input.addEventListener('change', updateCards);
  });
});