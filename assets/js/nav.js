function initNav() {

    const header = document.querySelector(".header");
    const toggleBtn = document.getElementById("toggleBtn");
    const menu = document.getElementById("menu");

    // Estado inicial
    header.classList.add("transparent");

    // Cambio al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.remove("transparent");
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            header.classList.add("transparent");
        }
    });

    // Toggle mobile
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
}
