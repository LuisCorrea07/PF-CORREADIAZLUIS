let formulario = document.getElementById("registro");
let inputNombre = document.getElementById('nombreUsuario');
let errorParrafo = document.getElementById('error');
let listadoDeUsuarios = document.getElementById('listaUsuariosRegistrados');
let listaUsuarios = [];



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    //Validar
    let formulario = e.target;
  
    if(formulario.children[0].value !== '' && 
       formulario.children[1].value !== '' && 
       formulario.children[2].value !== ''
      ) {
        listadoDeUsuarios.innerHTML += `
          <li>
            <p>Usuario: ${formulario.children[0].value}</p>
            <p>Edad: ${formulario.children[2].value}</p>
          </li>
        `;
        errorParrafo.innerText = "";
        listaUsuarios.push(formulario.children[0].value)
    } else {
      errorParrafo.innerText = "Todos los datos son requeridos.";
    }
  });
  
  inputNombre.onchange = () => {
    if(listaUsuarios.some((el) => el == inputNombre.value)) {
      errorParrafo.innerText = "El nombre de usuario ya existe.";
    }
  }
  