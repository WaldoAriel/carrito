//selector de cantidad de producto


const btnRestas = document.querySelectorAll(".restar"); // selecciona todos los botones '-'
const btnSumas = document.querySelectorAll(".sumar"); // lo mismo con los botones '+'
const mostrarCantidades = document.querySelectorAll(".muestraCantidad"); // y acá los span que van  modificando las cantidades

btnRestas.forEach((btnResta, indice) => {   // recorre cada elemento de la nodelist para aplicar la función a cada boton '-'   
    btnResta.addEventListener("click", function() {             
        let cantidadActual = parseInt(mostrarCantidades[indice].textContent);
        if (cantidadActual > 1) {           //  sólo disminuye si la cantidad es mayor a 1
            cantidadActual--;
            mostrarCantidades[indice].textContent = cantidadActual;
        }
    });
});

btnSumas.forEach((btnSuma, indice) => {      // recorre cada elemento de la nodelist para aplicar la función a cada boton '+'
    btnSuma.addEventListener("click", function() {
        let cantidadActual = parseInt(mostrarCantidades[indice].textContent);
        cantidadActual++;
        mostrarCantidades[indice].textContent = cantidadActual;
    });
});

