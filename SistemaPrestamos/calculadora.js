let opcionMenu = 0;
let resultado =0;
const arrInteresGanado = []; //creo un array vacio
const arrCapital = [];

function cargaCapital(capitalInicial){
    arrCapital.push(capitalInicial);
}

function calcularInteresDia(capitalInicial,tasa, periodo){
  return interes = (capitalInicial*tasa*periodo)/(100*periodo); 
}

function cargaInteres(interes){
  arrInteresGanado.push(interes); //cargo los intereses al array vacio
}

function interesADevolver(capitalInicial, interes){
     return aDevolver = capitalInicial + interes;
}

function mensajeDespedida(){
    alert("Adios!")
}

function mostrarResultado(resultado){
    alert(`Usted debe devolver $:${resultado}`);
}

arrInteresGanado.forEach(interes => console.log(interes)); //muestro el array de Intereses
arrCapital.forEach(capitalInicial => console.log(capitalInicial)); //muestro el array de Capital Inicial

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
            interesTotal = calcularInteresDia(capitalInicial,tasa,7);
            resultado = interesADevolver(capitalInicial, interesTotal);
            mostrarResultado(resultado)
        break;
        case '3':
            interesTotal = calcularInteresDia(capitalInicial,tasa,15);
            resultado =interesADevolver(capitalInicial, interesTotal);
            mostrarResultado(resultado);
        break;
        case '4':
           interesTotal = calcularInteresDia(capitalInicial,tasa,30);
           resultado = interesADevolver(capitalInicial, interesTotal);
           mostrarResultado(resultado);
        break;
        default:
            mensajeDespedida();
        break
    }
}