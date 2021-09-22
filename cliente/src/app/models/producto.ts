export class Producto {
    _id?: number;
    tipo: string;
    modelo: string;
    estado: string;
    precio: string;

    constructor( tipo: string , modelo: string, estado: string, precio: string ){
        this.tipo = tipo;
        this.modelo = modelo;
        this.estado = estado;
        this.precio = precio;
    }
}