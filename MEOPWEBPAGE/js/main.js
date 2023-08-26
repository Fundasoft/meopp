function cambioAgencia(boton){
    let agencia;
    const aCentral= document.getElementById("central").style.display="none";
    const aSur= document.getElementById("sur").style.display="none";
    const aNorte= document.getElementById("norte").style.display="none";
    const aCentro= document.getElementById("centro").style.display="none";
    const aCuyo= document.getElementById("cuyo").style.display="none";
    switch (boton.id) {
        case "aCentral":
            agencia= document.getElementById("central").style.display="flex";

        break;
        case "aSur":
            agencia= document.getElementById("sur").style.display="flex";

        break;
        case "aNorte":
            agencia= document.getElementById("norte").style.display="flex";

        break;
        case "aCentro":
            agencia= document.getElementById("centro").style.display="flex";
            
        break;
        case "aCuyo":
            agencia= document.getElementById("cuyo").style.display="flex";
            
        break;


        default:
            break;
    }
}
