window.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper(".project__swiper", {
        slidesPerView: 1,
        autoHeight: "auto",
        effect: "slide",
        speed: 1250,
        direction: "horizontal",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".project__nav-next",
            prevEl: ".project__nav-prev",
        },
        allowTouchMove: false,
    });

    let glightbox = new GLightbox({
        selector: ".glightbox",
    });

    glightbox.on("slide_changed", (data) => {
        const prev = data.prev;
        const current = data.current;

        if (prev.index - current.index === -1) {
            swiper.slideNext();
        } else if (prev.index - current.index === 1) {
            swiper.slidePrev();
        }
    });
});