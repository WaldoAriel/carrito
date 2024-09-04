// Definimos la clase SelectorProducto para manejar la lógica de aumentar y disminuir la cantidad de un producto
class SelectorProducto {
    constructor(btnResta, btnSuma, mostrarCantidad) {
        this.btnResta = btnResta;
        this.btnSuma = btnSuma;
        this.mostrarCantidad = mostrarCantidad;
        this.cantidadActual = parseInt(this.mostrarCantidad.textContent);

        this.btnResta.addEventListener("click", () => this.restarCantidad());
        this.btnSuma.addEventListener("click", () => this.sumarCantidad());
    }

    restarCantidad() {
        if (this.cantidadActual > 1) {
            this.cantidadActual--;
            this.mostrarCantidad.textContent = this.cantidadActual;
        }
    }

    sumarCantidad() {
        this.cantidadActual++;
        this.mostrarCantidad.textContent = this.cantidadActual;
    }
}

// ... (mantener la clase SelectorProducto sin cambios)

// Seleccionar los elementos del DOM relacionados con el carrito y el modal
const totalProductoElement = document.getElementById('totalProducto');
const totalPrecioElement = document.getElementById('totalPrecio');
const carritoModal = document.getElementById('carritoModal');
const cerrarModalBtn = document.getElementById('cerrarModal');
const carritoContenido = document.getElementById('carritoContenido');
const totalCompraElement = document.getElementById('totalCompra');

// Inicializar variables del carrito
let carrito = [];
let totalPrecio = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, cantidad) {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    totalPrecio += producto.precio * cantidad;

    actualizarCarrito();
    mostrarCarritoModal();
}

// Función para actualizar la UI del carrito
function actualizarCarrito() {
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
    totalProductoElement.textContent = totalProductos;
    totalPrecioElement.textContent = totalPrecio.toFixed(2);

    carritoContenido.innerHTML = '';
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.nombre} - ${item.cantidad} x $${item.precio.toFixed(2)}`;
        carritoContenido.appendChild(itemElement);
    });

    // Actualizar el total de la compra en el modal
    totalCompraElement.textContent = totalPrecio.toFixed(2);
}

// Función para mostrar el modal del carrito
function mostrarCarritoModal() {
    carritoModal.style.display = 'block';
}

// Función para cerrar el modal del carrito
function cerrarCarritoModal() {
    carritoModal.style.display = 'none';
}

// Configurar los selectores de producto
const btnRestas = document.querySelectorAll(".restar");
const btnSumas = document.querySelectorAll(".sumar");
const mostrarCantidades = document.querySelectorAll(".muestraCantidad");

btnRestas.forEach((btnResta, indice) => {
    new SelectorProducto(btnResta, btnSumas[indice], mostrarCantidades[indice]);
});

// Configurar los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-al-carrito');

botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = {
            id: index,
            nombre: boton.closest('.tarjeta').querySelector('h3').textContent,
            precio: parseFloat(boton.dataset.precio)
        };
        const cantidad = parseInt(boton.closest('.selector').querySelector('.muestraCantidad').textContent);
        agregarAlCarrito(producto, cantidad);
    });
});

// Agregar evento de clic al botón de cerrar el modal
cerrarModalBtn.addEventListener('click', cerrarCarritoModal);