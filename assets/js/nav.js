document.addEventListener("DOMContentLoaded", async () => {

    const navContainer = document.querySelector('[data-component="nav"]');
    if (!navContainer) return;

    try {
        const response = await fetch("components/nav.html");
        if (!response.ok) throw new Error("No se encontró nav.html");

        const data = await response.text();
        navContainer.innerHTML = data;

        initNav();

    } catch (error) {
        console.error("Error cargando el nav:", error);
    }

});

function initNav() {

    const toggleBtn = document.getElementById("toggleBtn");
    const menu = document.getElementById("menu");
    const dropdown = document.querySelector(".dropdown");
    const header = document.querySelector(".header");

    /* ================= MOBILE TOGGLE ================= */

    if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    /* ================= MEGA MENU HEADER EFFECT ================= */

    if (dropdown && header) {

        dropdown.addEventListener("mouseenter", () => {
            header.classList.add("mega-active");
        });

        dropdown.addEventListener("mouseleave", () => {
            header.classList.remove("mega-active");
        });

    }
}
