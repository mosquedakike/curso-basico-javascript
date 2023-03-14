var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
    //const element = estudian[i];
    //console.log(estudiantes[i]);
    saludar(estudiantes[i]);
}