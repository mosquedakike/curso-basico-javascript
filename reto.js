var car = function (color, brand, licensePlate, drivingLicense){
    this.color = color;
    this.brand = brand;
    this.licensePlate = licensePlate;
    this. drivingLicense = drivingLicense;
}

function solution(car){
    if(car.hasOwnProperty("licensePlate")){
        return {...car, licensePlate: true};    
    }
    else{
        return {...car, licensePlate: false};
    }
}

// var miNuevoCarro = new car("rojo", "tesla", "123456789", true);
// solution(miNuevoCarro);


var miOldCarro = new car("rojo", "tesla", 1324, "fasdf");
solution(miOldCarro);



