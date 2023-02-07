let opcionMenu = 0;
let resultado =0;

function sumar(numero1, numero2){
    return numero1+numero2;
}
function restar(numero1, numero2){
    return numero1-numero2;
}
function multiplicar(numero1, numero2){
    return numero1*numero2;
}
function dividir(numero1, numero2){
    return numero1/numero2;
}
function mensajeDespedida(numero1, numero2){
    alert("Adios!")
}

function mostrarResultado(resultado){
    alert(`Tu resultado es: ${resultado}`);
}



while(opcionMenu !=5){
    
    let numero1 = parseFloat(prompt("Ingrese un numero"));
    let numero2 = parseFloat(prompt("Ingrese otro numero"));
    opcionMenu=prompt(("Elija la opcion deseada: 1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5. Salir"));    
    
    switch(opcionMenu){
        case '1':
           resultado = sumar(numero1,numero2);
           mostrarResultado(resultado)
        break;
        case '2':
            resultado = restar(numero1,numero2);
            mostrarResultado(resultado)
        break;
        case '3':
            resultado = multiplicar(numero1,numero2);
            mostrarResultado(resultado)
        break;
        case '4':
            resultado = dividir(numero1,numero2);
            mostrarResultado(resultado)
        break;
        default:
            mensajeDespedida();
        break
    }
}