// Navigation handling
export function setupNavigation() {
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
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  // Show/hide menu with animation
  if (navToggle) {
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
} 