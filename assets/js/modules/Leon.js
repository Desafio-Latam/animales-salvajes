import Animal from "./Animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img,  comentarios,sonido) {
        super(nombre, edad, img,  comentarios,sonido)
        
    }
    rugir(){
console.log("El León Ruge");
    }
}

export default Leon;