// Services slideshow functionality
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