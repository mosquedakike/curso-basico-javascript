//scope
// El scope es el alcance de las variables

//scope global
var miNombre = "Enrique"

function nombre() {
    //scope local
    var miApellido = "Hernandez"
    console.log(miNombre + miApellido);
}

nombre();
console.log(miNombre + miApellido);
