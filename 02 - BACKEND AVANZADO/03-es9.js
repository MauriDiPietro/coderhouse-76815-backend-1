/* ----------------------------- spread operator ---------------------------- */

const array = [1, 2, 3,4,5,6,7,8]
console.log(Math.min(...array));

console.log([...array, 10, 12,15])

const usuario = { nombre: 'Diego', edad: 23, pais: 'Argentina' };
const usuarioActualizado = { ...usuario, edad: 24, ciudad: 'Buenos Aires' };

console.log(usuarioActualizado);

/* ------------------------------ rest operator ----------------------------- */

const myFunction = (a, b, ...otros) => {
    console.log(a);
    console.log(b);
    console.log(otros);
    
}

myFunction(1,2, 'hola', true, null)