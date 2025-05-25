// Theme initialization and management
export function initializeTheme() {
  // Set light mode as default unless explicitly set to dark
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export function setupThemeToggle() {
  // Get all theme toggle elements
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
  const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

  // Function to update icon visibility
  function updateIcons(isDark) {
    if (isDark) {
      // Show sun icon (light mode icon) when in dark mode
      if (darkIcon) darkIcon.classList.add('hidden');
      if (lightIcon) lightIcon.classList.remove('hidden');
      if (darkIconMobile) darkIconMobile.classList.add('hidden');
      if (lightIconMobile) lightIconMobile.classList.remove('hidden');
    } else {
      // Show moon icon (dark mode icon) when in light mode
      if (darkIcon) darkIcon.classList.remove('hidden');
      if (lightIcon) lightIcon.classList.add('hidden');
      if (darkIconMobile) darkIconMobile.classList.remove('hidden');
      if (lightIconMobile) lightIconMobile.classList.add('hidden');
    }
  }

  // Function to toggle theme
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    
    // Update icons after theme change
    updateIcons(!isDark);
  }

  // Set initial icon state
  updateIcons(document.documentElement.classList.contains('dark'));

  // Add click event listeners
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  if (themeToggleMobileBtn) {
    themeToggleMobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }
} 