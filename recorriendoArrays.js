var articulos = [
    {nombre: "mac mini", precio: 25000},
    {nombre: "macbook pro", precio: 50000},
    {nombre: "iphone 14", precio: 21000},
    {nombre: "Homepod", precio: 7000},
    {nombre: "Apple TV", precio: 3500}
];

var listaArticulos = articulos.filter(function (articulos){
    return articulos.precio >= 25000;
});

var listaArticulosMap = articulos.map(function (articulo){
    return articulo.nombre;
});