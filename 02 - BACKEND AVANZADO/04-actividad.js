const ventas = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const clavesNoRepetidas = [];

let totalVentas = 0;

for (const item of ventas) {
  const claves = Object.keys(item);
  // console.log(claves)
  const valores = Object.values(item);
  // console.log(valores);
  for (const key of claves) {
    if (!clavesNoRepetidas.includes(key)) clavesNoRepetidas.push(key);
  }
  for (const value of valores) {
    totalVentas += value;
  }
}

console.log(clavesNoRepetidas);
console.log(totalVentas);
