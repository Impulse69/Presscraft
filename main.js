// Import modular scripts
import { initializeTheme, setupThemeToggle } from '/scripts/theme.js';
import { setupNavigation } from '/scripts/navigation.js';
import { setupServicesSlideshow } from '/scripts/services-slideshow.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initializeTheme();
  setupThemeToggle();

  // Setup navigation
  setupNavigation();

  // Setup services slideshow
  setupServicesSlideshow();

  // Update copyright year
  document.getElementById('year').textContent = new Date().getFullYear();
});