// let usuario;
// let password;
// let usuarioLS;

// usuarioLS = sessionStorage.getItem('usuario');
// console.log(usuarioLS);

// if(usuarioLS == null){
//     usuario = prompt("Ingrese usuario");
//     password = prompt("Ingrese contraseña");

//     sessionStorage.setItem("usuario ", usuario);
// }else{
//     alert(`Hola ${usuarioLS}`);
// }




const productos =[{id: 1, producto:"Arroz", precio: 125},
                  {id: 2, productoi:"Fideo", precio: 70},
                  {id: 3, producto: "Cafe", precio: 170},
                  {id: 4, producto:"Pan", precio: 80}];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

//Almacenar producto por producto
for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}

// almacenar todo el array completo
guardarLocal("listaProductos", JSON.stringify(productos));