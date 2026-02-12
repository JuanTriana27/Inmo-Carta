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

    if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
}
