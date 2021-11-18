
const fruta = function(nuevaFruta){
    let canastaNueva = ["Manzana","Banana","pera", `${nuevaFruta}`];
    console.log(canastaNueva[0]);
}
fruta("Uva");



const fruta = function(nuevaFruta){
    let canastaNueva = ["Manzana", "Banana", "pera", `${nuevaFruta}`];
    for (let i = 0; i < canastaNueva.length; i++) {
        console.log(canastaNueva[i]);
    }
    
}
fruta("Uva");




let i = 0;
while (i++ < 5) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2 ) {
    console.log("El valor de i es: " + i);
    i--;
}


let i = 0;
while (i != 1) {
    var respuestaUsuraio = prompt("Cuanto es 2 + 2");
    let respuestaCorrecta = 4;
    if (respuestaUsuraio == respuestaCorrecta) {
        console.log("Felicidades");
        i++;
    }
    else {
        console.log("Intentalo de nuevo");
    }
    
}