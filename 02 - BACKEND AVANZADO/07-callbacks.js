const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const operacion = (a, b, cb) => {                                           
  return cb(a, b) 
}
console.log(operacion(2, 3, suma));

/* ------------------------------------ - ----------------------------------- */

setTimeout(()=>{
    console.log('Se ejecuta despues de 5 seg');
}, 0)

console.log('hola');



// array.find((it)=>it)