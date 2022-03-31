const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Darwin", precio: 999, stock:0, imagen: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/4B38/production/_107365291_gettyimages-526191956.jpg' },
    { id: 2, titulo: "Turing", precio: 222, stock:32, imagen: 'https://www.biografiasyvidas.com/biografia/t/fotos/turing.jpg' },
    { id: 3, titulo: "Newton", precio: 111, stock:0, imagen: 'https://dotorqantico.files.wordpress.com/2013/08/newton.jpg'},
    { id: 4, titulo: "Einstein", precio: 1982, stock: 56, imagen: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/04/17/150417194023_einstein-lengua.jpg' },
];

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Sin stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};


function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    generarCards(productosEncontrados);
}