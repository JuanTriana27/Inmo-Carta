const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const propiedades = {
    1: {
        titulo: "Casa Old",
        precio: "$450.000",
        imagen: "../assets/img/Casa1.jpeg",
        whatsapp: "573008412521"
    },
    2: {
        titulo: "Apartamento Moderno",
        precio: "$20.000",
        imagen: "../assets/img/Apartamento1.jpeg",
        whatsapp: "573008412521"
    }
};

const propiedad = propiedades[id];

if (propiedad) {

    document.querySelector("h1").textContent = propiedad.titulo;
    document.querySelector(".property-price").textContent = propiedad.precio;

    document.querySelector(".btn-whatsapp").href =
        `https://wa.me/${propiedad.whatsapp}?text=Hola, estoy interesado en ${propiedad.titulo}`;

} else {

    document.querySelector("main").innerHTML = `
        <div class="container" style="padding:5rem 0;">
            <h2>Propiedad no encontrada</h2>
        </div>
    `;
}

// BOTÓN COMPARTIR
document.querySelector(".btn-share").addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Enlace copiado al portapapeles");
});
