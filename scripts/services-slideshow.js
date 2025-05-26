// Services slideshow functionality
export function setupServicesSlideshow() {
  const slideshowImages = [
    'assets/images/slideshow/logo.png',
    'assets/images/slideshow/invitations.jpg',
    'assets/images/slideshow/t-shirt 2.jpg',
    'assets/images/slideshow/brochure.jpg',
    'assets/images/slideshow/printing.jpg',
    'assets/images/slideshow/key fobs.jpg',
    'assets/images/slideshow/wepik-export.png',
    'assets/images/slideshow/mugs.jpg',
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
} 