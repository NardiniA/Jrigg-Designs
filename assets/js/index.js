window.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper(".home__swiper", {
        slidesPerView: 1,
        direction: "horizontal",
        effect: "fade",
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let control = document.querySelector('.home__controls');
    control.addEventListener('click', () => {
        if (swiper.autoplay.running) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
        control.classList.toggle('paused');
    });
});