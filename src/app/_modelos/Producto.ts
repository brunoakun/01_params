
export class Producto {

    //Constructor
    constructor(productID: number, name: string, price: number) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }

    // Propiedades
    productID?: number;
    name?: string;
    price?: number;

    // Getters y Seters

}