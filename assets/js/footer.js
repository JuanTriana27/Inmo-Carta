async function loadFooter() {
    const basePath = window.location.pathname.includes("components")
    ? "../"
    : "";
    const container = document.querySelector('[data-component="footer"]');
    if (!container) return;

    const response = await fetch(`${basePath}components/footer.html`);
    const data = await response.text();
    container.innerHTML = data;
}

loadFooter();
