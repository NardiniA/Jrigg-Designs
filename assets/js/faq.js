window.addEventListener('DOMContentLoaded', () => {
    let faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
        let header = faq.querySelector(".faq__header");
        header.addEventListener("click", () => {
            faq.classList.toggle("opened");
        });
    });
});