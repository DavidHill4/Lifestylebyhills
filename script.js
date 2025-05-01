// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

// Booking calendar functionality
function openBooking(propertyId) {
    // Implement booking logic here
    console.log(`Opening booking for ${propertyId}`);
}