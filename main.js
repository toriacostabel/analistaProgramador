// array - metodos - ejercicios
const prompt = require("prompt-sync")();
/*
// ejercicio 1 
let compras = ["agua", "pan", "leche"];
console.log(compras);
let producto = prompt('Agrega un producto a la lista: ');
compras.push(producto);
console.log(compras);

// ejercicio 2
let nombres = ["Ana", "Juan", "Maria", "Jose", "Lucia", "Carlos", "Luisa"];
console.log(nombres);
console.log(nombres.includes("Luisa"));

// ejercicio 3
let invitados = ["juan", "pablo", "maria"];
console.log(invitados);
invitados.shift();
console.log(invitados);

// ejercicio 4
let tareas = ["cocinar", "barrer", "limpiar", "cobrar"];
console.log(tareas);
let importante = prompt("La tarea mas importante es: ");
tareas.unshift(importante);
console.log(tareas);

// ejercicio 5
//let libros = ['biblia', 'romeo y julieta', 'fabulas chinas'];

let newArray = [651, 6968, 8976, 4684, 850202, 0168, 78967];
let ingresar = parseInt(prompt('tirame YA un numero o te arranco la cabeza: '));

newArray.push(ingresar);
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] % 10 === 0) {
        let indice = i;
        console.log(`el primer multiplo de 10 en este array es el numero ${newArray[i]} y se encuentra en la posicion ${indice}`);
        break;
    }
}
if ( ingresar % 10 === 0) {
    console.log('zafaste, ingresaste multiplo de 10');
} else {
    console.log('cagaste, no es multiplo de 10,\nlas plasticas te odian y Regina te hace bullying el resto del año');
}
*/









let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let elemento of miArray) {
  if (elemento === 2) {
    console.log("Se encontró el número 2 en el array.");
  } else {
    console.log(elemento);
  }
}
