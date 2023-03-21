var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

// for (let i = 0; i < estudiantes.length; i++) {
//     saludar(estudiantes[i]);
// }

// for (var estudiante of estudiantes) {
//     saludar(estudiante);
// }

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante)
}