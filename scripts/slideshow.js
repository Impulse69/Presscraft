// Slideshow functionality
function setupSlideshow() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Show the current slide
        slides[index].classList.add('active');
        slides[index].style.opacity = '1';
        // Activate the corresponding dot
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        // Clear any existing interval
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        // Start the slideshow
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Initialize slideshow
    showSlide(currentSlide);
    startSlideshow();

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            startSlideshow(); // Reset the interval
        });
    });

    // Pause slideshow on hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        testimonialSection.addEventListener('mouseleave', () => {
            startSlideshow();
        });
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', setupSlideshow); 