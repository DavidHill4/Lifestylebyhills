// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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