import Animal from './Animal.js'
class Aguila extends Animal{
    constructor(nombre, edad, img,  comentarios,sonido){
        super(nombre, edad, img,  comentarios,sonido)
              
    }
    Chillar(){
        console.log("El Aguila Chilla");
    }
}


export default Aguila;