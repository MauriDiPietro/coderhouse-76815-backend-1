const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por cero");
    resolve(a / b);
  });
};

divisionPromesa(10, 0)
  .then((resultado) => console.log("Resultado:", resultado))
  .catch((error) => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Operación finalizada"));
