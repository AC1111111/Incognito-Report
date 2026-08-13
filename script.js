const bg = document.querySelector(".background");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    // 0.3 = 30% of the scroll speed
    bg.style.transform = `translateY(${scroll * -0.1}px)`;
});