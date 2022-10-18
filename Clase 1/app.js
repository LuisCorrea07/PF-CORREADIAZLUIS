let manzanas = parseFloat(prompt("ingresa cuantos kilos de manzanas compraras"));
let naranjas = parseFloat(prompt("ingresa cuantos kilos de naranjas compraras"));

// mza o naranaja > 10kg --> 15%
// mza y naranja > 10kg --> 20%
// mza o naranja 5-9 --> 10%

if(manzanas > 10 && naranjas > 10){
    alert("Usted tiene un 20% de descuento")
}else{
    if(manzanas >10 || naranjas > 10){
        alert("Usted tiene un 15% de descuento")
    }else{
        if((manzanas >= 5 &&manzanas <= 9) || (naranjas >= 5 && naranjas<=9)){
            alert("Usted tiene un 10% de descuento")
        }
    }
}