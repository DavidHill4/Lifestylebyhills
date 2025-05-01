// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize Hero Swiper
const heroSwiper = new Swiper('.hero-slider', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Thumbnail gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.property-images > img');
    const thumbnails = document.querySelectorAll('.thumbnail-grid img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = this.src;
            mainImage.alt = this.alt;

            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
        });
    });
});

// Booking function
function openBooking(propertyId) {
    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Initialize GLightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

// Scroll reveal functionality
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add reveal class to sections
document.querySelectorAll('.gallery-section, .amenities-section').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});