//selector de cantidad de producto

document.addEventListener("DOMContentLoaded", function() {
    const btnResta = document.querySelector(".restar");
    const btnSuma = document.querySelector(".sumar");
    const mostrarCantidad = document.querySelector(".muestraCantidad");

    let cantidadActual = 1;

    btnResta.addEventListener("click", function() {
        if (cantidadActual > 1) {
            cantidadActual--;
            mostrarCantidad.textContent = cantidadActual;
        }
    });

    btnSuma.addEventListener("click", function() {
        cantidadActual++;
        mostrarCantidad.textContent = cantidadActual;
    });
});
