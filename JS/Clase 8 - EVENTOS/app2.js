//buscador

//input para busquedas 
// boton para enviar busqueda


let parrafoError = document.getElementById('error');
let formulario = document.getElementById('buscador');
let listaDeBusquedas= document.getElementById('listaDeBusquedas');

formulario.onsubmit = (e) =>{
    e.preventDefault();
    let formulario = e.target;
    let busqueda = formulario.children[0].value;
    //validar busqueda

    if(busqueda !== ''){
        listaDeBusquedas.innerHTML += `<li>${busqueda}</li>`;
        formulario.children[0].value = '';
    }else{
        parrafoError.innerText = 'Debe ingresa una busqueda';
    }

}