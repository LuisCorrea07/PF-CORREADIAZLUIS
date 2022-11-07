// function mayorQue(n){
//     return(m) =>m>n
// }

// let mayorQueDiez = mayorQue(10);
// let mayorQueCinco = mayorQue(5)

// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(8));


// function porCadaUno(arr, fn){
//     for(const el of arr){
//         fn(el)
//     }
// }
// let total = 0;

// function acumular(numeros){
//     total += numeros
// }

// const numeros= [1,2,3,4,5]

// console.log(porCadaUno(numeros, acumular));

// const numeros= [1,2,3,4,5]

// numeros.forEach((num){

// });

const cursos =[
    {nombre: 'JavaScript', precio: 15000},
    {nombre: 'React JS', precio: 22000},
    {nombre: 'Angular JS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'));
const resultado2 = cursos.filter((el) => el.precio<14000);

console.log(resultado);
