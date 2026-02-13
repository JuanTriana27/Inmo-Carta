document.addEventListener("DOMContentLoaded", async () => {
    const navContainer = document.querySelector('[data-component="nav"]');
    if (!navContainer) return;

    const basePath = window.location.pathname.includes("components") ? "../" : "";

    try {
        const response = await fetch(`${basePath}components/nav.html`);
        if (!response.ok) throw new Error("No se encontró nav.html");

        const data = await response.text();
        navContainer.innerHTML = data;

        initNav(); // Inicializar toda la funcionalidad después de insertar el HTML
    } catch (error) {
        console.error("Error cargando el nav:", error);
    }
});

function initNav() {
    const toggleBtns = document.querySelectorAll(".toggle");
    const menu = document.getElementById("menu");
    const dropdown = document.querySelector(".dropdown");
    const header = document.querySelector(".header");
    const searchIcons = document.querySelectorAll(".fa-search, .mobile-search");
    const searchBar = document.getElementById("searchBar");
    const closeSearch = document.getElementById("closeSearch");
    const overlay = document.getElementById("menuOverlay");

    // ================= MENÚ HAMBURGUESA =================
    if (toggleBtns.length && menu && overlay) {
        const openMenu = () => {
            menu.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closeMenu = () => {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        };

        toggleBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (menu.classList.contains("active")) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        });

        overlay.addEventListener("click", closeMenu);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && menu.classList.contains("active")) {
                closeMenu();
            }
        });
    }

    // ================= BÚSQUEDA =================
    if (searchIcons.length && searchBar) {
        searchIcons.forEach(icon => {
            icon.addEventListener("click", (e) => {
                e.stopPropagation();
                searchBar.classList.toggle("active");
                if (searchBar.classList.contains("active")) {
                    const input = searchBar.querySelector("input");
                    if (input) input.focus();
                    if (menu && menu.classList.contains("active")) {
                        menu.classList.remove("active");
                        overlay.classList.remove("active");
                        document.body.style.overflow = "";
                    }
                }
            });
        });
    }

    if (closeSearch && searchBar) {
        closeSearch.addEventListener("click", () => {
            searchBar.classList.remove("active");
        });
    }

    document.addEventListener("click", (e) => {
        if (searchBar && searchBar.classList.contains("active") &&
            !searchBar.contains(e.target) &&
            !e.target.classList.contains("fa-search") &&
            !e.target.classList.contains("mobile-search")) {
            searchBar.classList.remove("active");
        }
    });

    // ================= MEGA MENÚ =================
    if (dropdown && header) {
        dropdown.addEventListener("mouseenter", () => {
            header.classList.add("mega-active");
        });
        dropdown.addEventListener("mouseleave", () => {
            header.classList.remove("mega-active");
        });
    }

    // ================= SCROLL =================
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (currentScroll > lastScroll && currentScroll > 10) {
                    header.classList.add("hidden");
                } else if (currentScroll < lastScroll) {
                    header.classList.remove("hidden");
                    header.classList.add("scrolled");
                    header.classList.remove("transparent");
                }
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