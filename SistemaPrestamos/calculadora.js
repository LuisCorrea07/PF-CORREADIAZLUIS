let opcionMenu = 0;
let resultado =0;

function calcularInteresDia(capitalInicial,tasa, periodo){
  interes = (capitalInicial*tasa*periodo)/(100*periodo);
  return interesGanado = interes*periodo;
}
function interesADevolver(capitalInicial, interesGanado){
     return aDevolver = capitalInicial + interesGanado;
}

function mensajeDespedida(){
    alert("Adios!")
}

function mostrarResultado(resultado){
    alert(`Tu resultado es: ${resultado}`);
}



while(opcionMenu !=5){
    
    let capitalInicial = parseFloat(prompt("Ingrese capital"));
    let tasa = parseInt(prompt("Ingrese tasa de interes a devolver"));

    opcionMenu=prompt(("Elija la opcion deseada: 1. x Dia, 2. A 7 días, 3. A 15 días, 4. A 30 días, 5. Salir"));    
    
    switch(opcionMenu){
        case '1':
           interesTotal = calcularInteresDia(capitalInicial,tasa, 1);
           resultado = interesADevolver(capitalInicial, interesTotal);
           mostrarResultado(resultado);
        break;
        case '2':
            interesTotal = calcularInteresDia(capitalInicial,tasa, 7);
            resultado = interesADevolver(capitalInicial, interesTotal);
            mostrarResultado(resultado)
        break;
        case '3':
            interesTotal = calcularInteresDia(capitalInicial,tasa,15);
            resultado =interesADevolver(capitalInicial, interesTotal);
            mostrarResultado(resultado);
        break;
        case '4':
           interesTotal = calcularInteresDia(capitalInicial,tasa, 30);
           resultado = interesADevolver(capitalInicial, interesTotal);
           mostrarResultado(resultado);
        break;
        default:
            mensajeDespedida();
        break
    }
}