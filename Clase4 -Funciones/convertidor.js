let opcionMenu = 0;
function convertirCentigradosaFarenheit(grados){
    let resultado = grados*1.8 +32;
    llamarResultado(resultado);
}

function convertirFarenheitaCentigrados(grados){
    let resultado = (grados-32)/1.8;
    llamarResultado(resultado);
}

function llamarResultado(resultado){
    alert (`Su resultado es ${resultado}`);
}

do{
    let grados = parseFloat(prompt("Ingrese Temperatura."));
    opcionMenu = prompt("Que desea realizar? (1. convertir C a F. 2. Convertir F a C. 3. Salir)");
    switch(opcionMenu){
        case "1":
        convertirCentigradosaFarenheit(grados);
        break;
        case "2":
        convertirFarenheitaCentigrados(grados);
        break;
        case "3":
            alert("adios");
        break;
        default:
      alert("No se encuentra la opcion deseada.");
      break;
    }
} while(opcionMenu !=3);

