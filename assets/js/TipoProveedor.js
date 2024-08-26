import { Proveedor } from './Proveedor.js';

export class TipoProveedor extends Proveedor {
    constructor(nombre, articulo, precio, internacional, pais) {
        super(nombre, articulo, precio);
        this.internacional = internacional;
        this.pais = pais;
    }

    getInfoProveedor() {
        let tipo = this.internacional ? 'Internacional' : 'Nacional';
        return `Proveedor: ${this.nombre}, País: ${this.pais}, Tipo: ${tipo}`;
    }
}
