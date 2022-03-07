
import Aguila from './modules/Aguila.js';
import Leon from './modules/Leon.js';
import Lobo from './modules/Lobo.js';
import Oso from './modules/Oso.js'
import Serpiente from './modules/Serpiente.js';

//Agregar animal
//registrar info
let datosAnimales = "hola"; 

const getAnimales =  (async () => {
    try {
        const URL = "animales.json";
        const request = await fetch(URL);
        const data = await request.json();
        datosAnimales = data;
        //console.log(datosAnimales.animales);
        //return data;
    } catch (error) {
        console.error(error);
    }
    
})();
console.log(datosAnimales.animales);
//capturando Nodos
const animales = document.getElementById("animales");
const animalSelect = document.getElementById("animal");
const selectEdad = document.getElementById("edad");
const comentario = document.getElementById("comentario");
const preview = document.getElementById("preview");
const player = document.getElementById("player");
const exampleModal = document.getElementById("exampleModal");
const btnRegistrar = document.getElementById("btnRegistrar");
const tabla = document.getElementById("tabla"); 

//evento boton de registrar
btnRegistrar.addEventListener("click", () =>{
    

})

//Instanciar
const lobo1 = new Lobo;
const oso1 = new Oso;
const leon1 = new Leon;
const aguila1 = new Aguila; 
const serpiente1 = new Serpiente; 


console.log(lobo1);
console.log(oso1);
console.log(leon1);
console.log(aguila1);
console.log(serpiente1);