// Enhanced Services Slideshow with Navigation Controls
export function setupServicesSlideshow() {
  const slideshowImages = [
    '/images/slideshow/logo.png',
    '/images/slideshow/invitations.jpg',
    '/images/slideshow/t-shirt 2.jpg',
    '/images/slideshow/brochure.jpg',
    '/images/slideshow/printing.jpg',
    '/images/slideshow/key fobs.jpg',
    '/images/slideshow/wepik-export.png',
    '/images/slideshow/mugs.jpg',
  ];

  let currentIndex = 0;
  let autoPlayInterval;
  let isTransitioning = false;

  const slideshowEl = document.getElementById('services-slideshow');
  const containerEl = slideshowEl?.parentElement;

  if (!slideshowEl || !containerEl) return;

  // Create navigation controls
  const createControls = () => {
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slideshow-nav slideshow-nav-prev';
    prevBtn.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
      </svg>
    `;
    prevBtn.setAttribute('aria-label', 'Previous image');

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'slideshow-nav slideshow-nav-next';
    nextBtn.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
      </svg>
    `;
    nextBtn.setAttribute('aria-label', 'Next image');

    // Indicators container
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'slideshow-indicators';

    // Create indicator dots
    slideshowImages.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `slideshow-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to image ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(dot);
    });

    // Add controls to container
    containerEl.style.position = 'relative';
    containerEl.appendChild(prevBtn);
    containerEl.appendChild(nextBtn);
    containerEl.appendChild(indicatorsContainer);

    // Event listeners
    prevBtn.addEventListener('click', () => previousSlide());
    nextBtn.addEventListener('click', () => nextSlide());
  };

  // Update indicators
  const updateIndicators = () => {
    const dots = containerEl.querySelectorAll('.slideshow-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  // Transition to a specific slide
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    isTransitioning = true;
    currentIndex = index;

    // Fade out
    slideshowEl.style.opacity = '0';
    slideshowEl.style.transform = 'scale(0.95)';

    setTimeout(() => {
      slideshowEl.src = slideshowImages[currentIndex];
      updateIndicators();

      // Fade in
      setTimeout(() => {
        slideshowEl.style.opacity = '1';
        slideshowEl.style.transform = 'scale(1)';
        isTransitioning = false;
      }, 50);
    }, 400);

    resetAutoPlay();
  };

  // Next slide
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideshowImages.length;
    goToSlide(nextIndex);
  };

  // Previous slide
  const previousSlide = () => {
    const prevIndex = (currentIndex - 1 + slideshowImages.length) % slideshowImages.length;
    goToSlide(prevIndex);
  };

  // Auto-play functionality
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  // Pause on hover
  containerEl.addEventListener('mouseenter', stopAutoPlay);
  containerEl.addEventListener('mouseleave', startAutoPlay);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Initialize
  createControls();
  startAutoPlay();

  // Preload images for smoother transitions
  slideshowImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}