/* --------------------------------- nullish -------------------------------- */

// 0, null, undefined, false, NaN, ''

let altura = 0;

console.log('Altura', altura ?? 100);

/* --------------------------- variables privadas --------------------------- */

class Persona {
    #fullName;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.#fullName = `${nombre} ${apellido}`;
    }

    static variable = 'Hola'

    obtenerDatosPersona(){
        return {
            nombreCompleto: this.#fullName,
            edad: this.edad
        }
    }
}

const instancia1 = new Persona('Carlos', 'Gomez', 45)
const instancia2 = new Persona('Susana', 'Perez', 34)

console.log(instancia1.obtenerDatosPersona())
console.log(instancia2.obtenerDatosPersona())