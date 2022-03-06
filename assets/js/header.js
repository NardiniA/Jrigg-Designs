window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const dropdowns = document.querySelectorAll(".dropdown");
    const toggle = document.querySelector(".header__toggle");
    const navLinks = document.querySelectorAll('.header .nav__link');

    const closeMenu = () => {
        document.body.classList.remove("no-scroll");
        document.querySelectorAll('.dropdown.show').forEach(ds => ds.classList.remove("show"));
        header.classList.remove("show");
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("no-scroll");
            if (header.classList.contains("show")) {
                document
                    .querySelectorAll(".dropdown.show")
                    .forEach((ds) => ds.classList.remove("show"));
            }
            header.classList.toggle("show");
        });
    }
    
    navLinks.forEach(n => n.addEventListener('click', closeMenu));

    dropdowns.forEach(d => {
        let head = d.querySelector('.dropdown__header');
        let menu = d.querySelector('.dropdown__menu');
        head.addEventListener('click', () => {
            d.classList.toggle('show');
        });

        menu.style.setProperty(
            "--dropdownHeight",
            menu.childElementCount * 40 + 16 + "px"
        );
    });
});