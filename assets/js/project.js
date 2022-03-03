window.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper('.project__swiper', {
        slidesPerView: 1,
        autoHeight: 'auto',
        effect: 'slide',
        speed: 750,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
});