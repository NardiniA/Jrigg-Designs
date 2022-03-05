window.addEventListener('DOMContentLoaded', () => {
    let faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
        let header = faq.querySelector(".faq__header");
        let info = faq.querySelector('.faq__info');

        header.addEventListener("click", () => {
            faq.classList.toggle("opened");
        });

        console.log(info.scrollHeight);

        info.style.setProperty("--scrollHeight", info.scrollHeight + "px");
    });

    window.addEventListener('resize', () => {
        faqs.forEach((faq) => {
            let info = faq.querySelector(".faq__info");
            info.style.setProperty("--scrollHeight", info.scrollHeight + "px");
        });
    });
});