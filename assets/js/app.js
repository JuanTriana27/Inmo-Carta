document.addEventListener("DOMContentLoaded", async () => {

    const navContainer = document.querySelector('[data-component="nav"]');

    if (navContainer) {
        const response = await fetch("components/nav.html");
        const data = await response.text();
        navContainer.innerHTML = data;

        initNav();
    }

});

function initNav() {
    const toggleBtn = document.getElementById("toggleBtn");
    const menu = document.getElementById("menu");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
}
