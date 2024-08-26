import { Proveedor } from './Proveedor.js';
import { Articulo } from './Articulo.js';
import { TipoProveedor } from './TipoProveedor.js';

function calcularImpuesto(proveedor) {
    const tasaImpuesto = 0.15;
    return proveedor.precio * tasaImpuesto;
}

function actualizarTablaProveedores(proveedores) {
    const tabla = document.getElementById('tabla-proveedores');
    tabla.innerHTML = '';  

    proveedores.forEach(proveedor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${proveedor.nombre}</td>
            <td>${proveedor.articulo.nombre}</td>
            <td>${proveedor.precio}</td>
            <td>${proveedor.getInfoProveedor()}</td>
        `;
        tabla.appendChild(row);
    });
}


document.getElementById('form-proveedor').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-proveedor').value;
    const articuloNombre = document.getElementById('nombre-articulo').value;
    const email = document.getElementById('email-articulo').value;
    const telefono = document.getElementById('telefono-articulo').value;
    const precio = document.getElementById('precio-articulo').value;
    const pais = document.getElementById('pais-proveedor').value;
    const internacional = document.getElementById('internacional-proveedor').checked;

    const articulo = new Articulo(articuloNombre, email, telefono);
    const proveedor = new TipoProveedor(nombre, articulo, precio, internacional, pais);

    proveedores.push(proveedor);

    actualizarTablaProveedores(proveedores);
});

const proveedores = [];

document.getElementById('form-impuesto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const precio = parseFloat(document.getElementById('precio-calculo').value);
    const tasaImpuesto = 0.15;
    const impuesto = precio * tasaImpuesto;

    document.getElementById('resultado-impuesto').textContent = `El impuesto sobre el artículo es: $${impuesto.toFixed(2)}`;
});
