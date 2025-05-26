// Import modular scripts
import { initializeTheme, setupThemeToggle } from './scripts/theme.js';
import { setupNavigation } from './scripts/navigation.js';
import { setupServicesSlideshow } from './scripts/services-slideshow.js';
import { setupTestimonialsSlideshow } from './scripts/slideshow.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initializeTheme();
  setupThemeToggle();

  // Setup navigation
  setupNavigation();

  // Setup slideshows
  setupServicesSlideshow();
  setupTestimonialsSlideshow();

  // Update copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});