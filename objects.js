var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: "2023",
    detalleDelAuto: function() { 
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

miAuto.detalleDelAuto();

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var nuevoAuto = new auto("ford", "focus st", 2019);