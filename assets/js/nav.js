document.addEventListener("DOMContentLoaded", async () => {

    const navContainer = document.querySelector('[data-component="nav"]');
    if (!navContainer) return;

    const basePath = window.location.pathname.includes("components")
        ? "../"
        : "";

    try {
        const response = await fetch(`${basePath}components/nav.html`);
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

    /* ================= SCROLL BEHAVIOR ================= */

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        if (!ticking) {
            window.requestAnimationFrame(() => {

                /* ---- SCROLL DOWN ---- */
                if (currentScroll > lastScroll && currentScroll > 10) {
                    header.classList.add("hidden");
                }

                /* ---- SCROLL UP ---- */
                else if (currentScroll < lastScroll) {
                    header.classList.remove("hidden");
                    header.classList.add("scrolled");
                    header.classList.remove("transparent");
                }

                /* ---- TOP OF PAGE ---- */
                if (currentScroll <= 0) {
                    header.classList.remove("scrolled");
                    header.classList.add("transparent");
                }

                lastScroll = currentScroll;
                ticking = false;

            });

            ticking = true;
        }

    });

}
