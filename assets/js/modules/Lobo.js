import Animal from './Animal.js'
class Lobo extends Animal {
    constructor(nombre, edad, img,  comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)      
        
    }

    rugir() {
       console.log("ruge!!!");
   };
}

/* nombre,
edad,
img,
comentarios,
sonido */
export default Lobo;