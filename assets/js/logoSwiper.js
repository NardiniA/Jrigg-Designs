window.addEventListener('DOMContentLoaded', () => {
    let scroller = document.querySelector('.associates__scroller');
    scroller.style.animationDuration = `${scroller.childElementCount * 3.25}s`;
    console.log(`${scroller.childElementCount * 3.25}s`);
});