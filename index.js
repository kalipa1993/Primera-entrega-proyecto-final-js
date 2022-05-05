class Producto {
    constructor(id,nombre,precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.nombre}, ${this.precio} CLP`;
    }
}   

const arrayProductos = [1];

arrayProductos.push(new Producto(1, "Omo",1790));
arrayProductos.push(new Producto(2, "Drive",2090));
arrayProductos.push(new Producto(3, "Quix",1990));
arrayProductos.push(new Producto(4, "Soft",1690));
arrayProductos.push(new Producto(5, "Leche",1100));
arrayProductos.push(new Producto(6, "Azucar",1090));
arrayProductos.push(new Producto(7, "Aceite",2690));
arrayProductos.push(new Producto(8, "Fanta",2800));
arrayProductos.push(new Producto(9, "Semola",590));
arrayProductos.push(new Producto(10, "Cloro",1250));
arrayProductos.push(new Producto(11, "Confort",1400));
arrayProductos.push(new Producto(12, "Pasta dental",1000));
arrayProductos.push(new Producto(13, "Jabon",790));
arrayProductos.push(new Producto(14, "Ketchup",1340));
arrayProductos.push(new Producto(15, "Mayonesa",2350));

const mensaje = (listaProductos) => {
    let auxMensaje =[];
    auxMensaje.push("Elije el producto a comprar: ");
    for (let i = 0; i < listaProductos.length; i++){
        auxMensaje.push(listaProductos[i].toString());

    }
    auxMensaje.push("Para finalizar su elección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirProductos;
let buscarProducto;
const carrito = [];
let precio = 0;

elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while((elegirProductos > 0) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id ===elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Seleccionaste:\n${carrito.join("\n")}\nEl total del cargo es: ${precio} CLP`);
} else{
    alert("¡Ups,no seleccionaste nada!");
} if(mensaje){
    alert("Muchas gracias por tu compra, vuelve pronto!");
}