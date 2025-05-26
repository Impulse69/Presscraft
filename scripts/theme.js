// Theme initialization and management
export function initializeTheme() {
  console.log('Initializing theme...');
  // Check for saved theme preference or use system preference
  const isDark = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  console.log('Is dark mode?', isDark);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function setupThemeToggle() {
  console.log('Setting up theme toggle...');
  
  // Get all theme toggle elements
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
  const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

  console.log('Theme toggle elements:', {
    themeToggleBtn: !!themeToggleBtn,
    themeToggleMobileBtn: !!themeToggleMobileBtn,
    darkIcon: !!darkIcon,
    lightIcon: !!lightIcon,
    darkIconMobile: !!darkIconMobile,
    lightIconMobile: !!lightIconMobile
  });

  // Function to update icon visibility based on current theme
  function updateIcons(isDark) {
    console.log('Updating icons for dark mode:', isDark);
    
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
  function toggleTheme(e) {
    console.log('Theme toggle clicked');
    if (e) e.preventDefault();
    
    const isDark = document.documentElement.classList.contains('dark');
    console.log('Current theme is dark:', isDark);
    
    if (isDark) {
      // Switch to light mode
      console.log('Switching to light mode');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      updateIcons(false);
    } else {
      // Switch to dark mode
      console.log('Switching to dark mode');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      updateIcons(true);
    }
  }

  // Set initial icon state based on current theme
  const isDark = document.documentElement.classList.contains('dark');
  console.log('Initial theme is dark:', isDark);
  updateIcons(isDark);

  // Add click event listeners
  if (themeToggleBtn) {
    console.log('Adding click listener to desktop toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (themeToggleMobileBtn) {
    console.log('Adding click listener to mobile toggle');
    themeToggleMobileBtn.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    console.log('System theme changed:', e.matches ? 'dark' : 'light');
    if (!('theme' in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
      } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
      }
    }
  });
} 