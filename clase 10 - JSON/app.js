let usuario;
let password;
let usuarioLS;

usuarioLS = sessionStorage.getItem('usuario');
console.log(usuarioLS);

if(usuarioLS == null){
    usuario = prompt("Ingrese usuario");
    password = prompt("Ingrese contraseña");

    sessionStorage.setItem("usuario ", usuario);
}else{
    alert(`Hola ${usuarioLS}`);
}