/*
mostrarLista(array)
- Si la lista está vacía, devolver msj 'Lista vacía'
- Si la lista cuenta con elementos, mostrarlos
- Devolver longitud de la lista
*/

const mostrarLista1 = (lista) => {
  if (!Array.isArray(lista)) return "No es un array";
  if (!lista.length) return "Lista vacía";
  const array = [];
  for (const element of lista) {
    array.push(element);
  }
  return { array, longitud: array.length };
};

/* ------------------------------------ - ----------------------------------- */

const mostrarLista2 = (lista) => {
  if (!Array.isArray(lista)) return "No es un array";
  if (!lista.length) return "Lista vacía";
  return { array: lista.map(i => i), longitud: lista.length };
};

console.log(mostrarLista2([1,2,3,4,6,7,90]));


const array = [1,2,3,4,6,7,90]

console.log(array[0])

/* ------------------------------------ - ----------------------------------- */

function mostrarLista3(lista){

}

const test = name => `Hola ${name}`


const array2 = [1,2,3,4,6,7,9]

const array3 = array2.filter(i=> i > 4)

console.log(array3);
