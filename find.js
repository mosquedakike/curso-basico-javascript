var articulos = [
    {nombre: "mac mini", precio: 25000},
    {nombre: "macbook pro", precio: 50000},
    {nombre: "iphone 14", precio: 21000},
    {nombre: "Homepod", precio: 7000},
    {nombre: "Apple TV", precio: 3500}
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 10000;
});