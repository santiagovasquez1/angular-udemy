export class ZapatillaModel {
  marca: string;
  talla: string;
  precio: number;
  color: string;
  stok: boolean;

  constructor(marca, talla, precio, color, stock) {
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
    this.color = color;
    this.stok = stock
  }

}
