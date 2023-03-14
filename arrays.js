var frutas = ["manzana", "platano", "cereza", "fresa"];

//agrega un elemento al final del arreglo
var masFrutas = frutas.push("Uvas");

//remueve el ultimo elemento del arreglo
var ultimo = frutas.pop("Uvas");

//agrega un elemento al inicio del arreglo
var nuevaLongitud = frutas.unshift("mango");

//remueve el ultimo elemento del arreglo
var borrarFruta = frutas.shift("mango");

//retorna la posicion de un elemento dentro del arreglo
var posicion = frutas.indexOf("cereza");


console.log(frutas.length);
console.log(frutas[0]);

