// Import modular scripts
import { initializeTheme, setupThemeToggle } from "./scripts/theme.js";
import { setupNavigation } from "./scripts/navigation.js";
import { setupServicesSlideshow } from "./scripts/services-slideshow.js";
import { setupTestimonialsSlideshow } from "./scripts/slideshow.js";

// Import and initialize Tempo Devtools
import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  initializeTheme();
  setupThemeToggle();

  // Setup navigation
  setupNavigation();

  // Setup slideshows
  setupServicesSlideshow();
  setupTestimonialsSlideshow();

  // Update copyright year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Global error handling for Tempo
window.addEventListener("error", (event) => {
  console.error("Global error caught:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});
