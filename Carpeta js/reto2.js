const piedra ="piedra";
const papel ="papel";
const tijeras ="tijeras";


function Juego (persona,maquina) {

    //Si el jugador empata con la maquina
    switch(true) {
        case persona === maquina:
            console.log("Ha sido un empate")
            break;

        case  persona === piedra && maquina === tijeras:
            console.log("Ha ganado la persona");
            break;

        case persona === papel && maquina === piedra: 
            console.log("Ha ganado la persona");
            break;
        
        case persona === tijeras && maquina === papel:
            console.log("Ha ganado la persona");
            break;
            default:
                console.log("perdiste")
    }
}
Juego("papel","tijeras")

