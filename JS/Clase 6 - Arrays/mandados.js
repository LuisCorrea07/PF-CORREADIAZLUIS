// //lista de mandados
// const listaDeMandadosPadre = ['Huevos, Pan, Pollo, Carne, Manteca'];
// const listaDeMandadosMadre = ['Leche, Cereal, Cafe'];

// const listaDeMandado = listaDeMandadosPadre.concat(listaDeMandadosMadre);

// // console.log(listaDeMandadosPadre);
// // console.log(listaDeMandadosMadre);
// // console.log(listaDeMandado);


// const indiceCarne = listaDeMandado.indexOf('Carne');
// console.log(listaDeMandado);
// listaDeMandado.splice(indiceCarne,1);
// console.log(listaDeMandado);

// listaDeMandado.forEach((producto) => {
//     console.log(producto)
// });


const porDos = numeros.map(x => x*2);


class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva (){
        this.precio = this.precio * 1.21;
    }
}  

const productos=[];
productos.push(new Producto("arroz","125"));
productos.push(new Producto("fideos", "70"));
productos.push(new Producto("Pan","50"));

for(const producto of productos){
    producto.sumaIva();
}