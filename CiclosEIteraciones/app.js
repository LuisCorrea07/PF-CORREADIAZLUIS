// let sumador = 0;

// for(i=0; i<5;i++){
//     let calificacion = parseFloat(prompt("Ingresa una calificacion"));
//     sumador+=calificacion;
    
// }
// let promedio = sumador/5;
// alert(`El promedio de calificaciones es: ${promedio}`);

// let boletosPrimeraClase = 0;
// let boletosStandar = 0;

// for(let i=1; i<=10;i++){
//     let boletoElegido = prompt("Elige tu boleto; 1) Primera Clase. 2) Boleto Standard");
//     if(boletoElegido==1){
//         boletosPrimeraClase++;
//     }else{
//         boletosStandar++;
//     }
// }
// alert(`${boletosPrimeraClase} eligieron Primera Clase y ${boletosStandar} eligieron Standard`);

let operacion;
let dineroDisponible = 1000;
do{
    let opcion = parseInt(prompt("Ingrese una opcion. 1)Sacar dinero. 2)Depositar.3) Revisar cuenta. 4)Salir"))
    console.log(opcion);
    switch(opcion){
        case 1:
            if(dineroDisponible > 0){
                console.log("Dinero disponible: " + dineroDisponible + " Extrayendo dinero");
            }else{
                if(dineroDisponible==0){
                    console.log("No dispone de dinero")
                }
            }
            break;
        case 2: 
            console.log("Ingrese su dinero en la maquina");
            break;
        case 3:
            console.log("Reporte de cuenta, usted dispone de: "+ dineroDisponible);
            break;
        case 4:
            console.log("Adios Usuario");
            break;
            default:
                console.log('Operacion invalida.')
                break;
    }
}while (operacion)