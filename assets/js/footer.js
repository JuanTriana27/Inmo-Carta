async function loadFooter() {
    const container = document.querySelector('[data-component="footer"]');
    if (!container) return;

    const response = await fetch("components/footer.html");
    const data = await response.text();
    container.innerHTML = data;
}

loadFooter();
