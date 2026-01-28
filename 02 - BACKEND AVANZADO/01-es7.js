/* ------------------------------- exponencial ------------------------------ */

console.log(Math.pow(2, 3))

console.log(2 ** 3)

/* -------------------------------- includes -------------------------------- */
const array = [1, 2, 3, 4, 5] 

console.log(array.includes(3))

const users = ['Juan', 'Ana', 'Pedro', 'Maria']
console.log(users.includes('Ana'))

/* ------------------------------------ ES6 ----------------------------------- */

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Maria', edad: 40 }
]

console.log(personas.some((persona)=> persona.edad === 30))     //true | false

console.log(personas.find((persona)=> persona.edad === 30)) 