//Variables
var persona;
var maquina;

function Juego (persona,maquina) {
    const piedra ="piedra";
    const papel ="papel";
    const tijeras ="tijeras";


    //Demostrar que las constantes son negativas y asi dar un verdadero y falso cuando se comparen
    if (persona != "piedra" || persona != "papel" || persona !="tijeras") {
        console.log("jugada no valida")
    }

    //Si el jugador empata con la maquina
    if(persona === maquina) {
        console.log("Ha sido un empate")
    }
    //Si el jugador gana
    else if(persona === piedra && maquina === tijeras) {
        console.log("Ha ganado la persona")
    }
    else if(persona === papel && maquina === piedra) {
        console.log("Ha ganado la persona")
    }
    else if(persona === tijeras && maquina === papel) {
        console.log("Ha ganado la persona")
    }
    //Si la maquina gana
    else if(maquina === piedra && persona === tijeras) {
        console.log("Ha ganado la maquina")
    }
    else if(maquina === papel && persona === piedra) {
        console.log("Ha ganado la maquina")
    }
    else if(maquina === tijeras && persona === papel) {
        console.log("Ha ganado la maquina")
    }
}

Juego("papel","tijeras")