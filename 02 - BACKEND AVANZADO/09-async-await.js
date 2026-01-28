const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por cero");
    resolve(a / b);
  });
};


const divisionAsync = async(a, b) => {
    try {
        return await divisionPromesa(a, b);
    } catch (error) {
        console.error("Error:", error);
    }
}

const test = async() =>{
    console.log(await divisionAsync(10, 5));
}

test();

/* ------------------------------------ - ----------------------------------- */

const getApi = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(await response.json());
}

getApi();