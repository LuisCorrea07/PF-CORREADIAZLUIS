{/* <form id="formulario">
    <input type="text">
    <input type ="number">
    <input type = "submit" value= "Enviar">
</form> */}

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log("Formulario Enviado");
// }
class Disfraz{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
        this.stock = stock;
    }
}

let disfracesEnVenta = [];
let incremento = 5;
disfracesEnVenta.push(new Disfraz(1, 'Vampiro', 125,5));
disfracesEnVenta.push(new Disfraz(1, 'Bruja', 2900,1));
disfracesEnVenta.push(new Disfraz(1, 'Hombre Lobo', 3000,2));
disfracesEnVenta.push(new Disfraz(1, 'Jason', 500,4));

let parrafoError = document.getElementById('error');
let formulario = document.getElementById('formularioDisfraz');
let listaDisfraces = document.getElementById('disfracesDisponibles');

disfracesEnVenta.forEach((disfraz) =>{
    let li = document.createElement('li');
    li.innerText = `Nombre: ${disfraz.nombre} - Precio: ${disfraz.precio} - Stock: ${disfraz.stock}`;
    listaDisfraces.appendChild(li);
});

formulario.addEventListener('submit', (e) =>{
    datos = e.target.children;
    
    if(datos[0] !== ''&&(datos[1].value !== ''&& datos[1].value>0)&&(datos[2]!==''&&datos[2].value>0)){
        let existeDisfraz = disfracesEnVenta.some((disfraz)=>disfracesEnVenta.nombre=== datos[0].value);
        
        if(existeDisfraz){
            parrafoError.innerText = 'Este disfraz ya existe, imposible agregarlo'
        }else{
            disfracesEnVenta.push(new Disfraz(incremento,datos[0].value, datos[1].value, datos[2].value));
            incremento ++;

            listaDisfraces.innerHTML += `<li>Nombre: ${disfraz.nombre} - Precio: ${disfraz.precio} - Stock: ${disfraz.stock}</li>`;
            parrafoError.innerText = '';
        }
    }else{
        parrafoError.innerText = 'Todos los campos son obligatorios'
    }
});