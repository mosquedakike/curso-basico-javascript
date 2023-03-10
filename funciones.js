//funciones declarativas declarativas
function miFuncion(){
    return 3;
}

//funciones de expresion o anonimas
var otraFuncion = function(a,b){
    return a + b;
}

//invocar funcion
otraFuncion(5,10);


//funcion para saludar estudiantes
function saludarEstudiantes(estudiante) {
    console.log(`Hola mi nombre es ${estudiante}`);
}



//ejemplo con return
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}