/*function saludar (nombre="UsuarioAnonimo"){
    console.log(`Hola, ${nombre}!`);
}

saludar();


const sumar = (a, b) => console.log(`La suma de ${a} y ${b} es: ${a + b}`);
sumar(5, 10);*/

/*//Scope
if (true) {
    var variableGlobal = "Soy una variable global";
    let variableLocal = "Soy una variable local";
    const constante = "Soy una constante";
}

console.log(variableGlobal); // Accesible
//console.log(variableLocal); // Error: variableLocal is not defined
//console.log(constante); // Error: constante is not defined*/

/*function calcularArea(base, altura) {
    return base * altura;
}

function imprimir (area){
    console.log(`El área del rectangulo es: ${area}`);
}

let base= parseInt(prompt("Ingrese la base del triángulo:"));
let altura= parseInt(prompt("Ingrese la altura del triángulo:"));

let area = calcularArea(base, altura);

imprimir (area);*/

/*let elemento = document.getElementById("Titulo")
console.log(elemento);

elemento.style.color = "red";
elemento.style.fontFamily = "Cursive";

let cajas= document.getElementsByClassName("caja");
console.log(cajas);
for (let i = 0; i<cajas.length;i++){
    cajas
    cajas[i].style.color = "green";
};*/

/*let primerParrafo = document.querySelector(".contenedor .texto");
console.log(primerParrafo);
primerParrafo.textContent = "Hola Mundo!"*/

/*let nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
document.getElementById("lista").appendChild(nuevoElemento);*/


/*
let boton = document.getElementById("btn");
boton.addEventListener("click", function() {
    alert("¡Botón presionado!");
});
*/


const botonAgregar = document.getElementById("btnAgregar");
const botonVaciar = document.getElementById("btnVaciar");
const lista = document.getElementById("lista");

botonAgregar.onclick = function() {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = "Nuevo Elemento";
    lista.appendChild(nuevoElemento);
}
botonVaciar.onclick = function() {
    const carritoVacio = document.getElementById('lista');
    carritoVacio.innerHTML = "";
    alert("Carrito vaciado exitosamente");
    
}
