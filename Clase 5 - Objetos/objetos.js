function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function() {console.log("HOLA SOY "+ this.nombre)}
}

const persona1 =new Persona("Luis", 30, "independencia 357");
console.log(persona1);