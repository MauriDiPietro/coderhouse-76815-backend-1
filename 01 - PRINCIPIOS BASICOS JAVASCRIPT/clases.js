class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    static variable = 'Hola'

    obtenerDatosPersona(){
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad
        }
    }
}

const instancia1 = new Persona('Carlos', 'Gomez', 45)
const instancia2 = new Persona('Susana', 'Perez', 34)

console.log(instancia1.obtenerDatosPersona())
console.log(instancia2.obtenerDatosPersona())

Persona.variable

/* ------------------------------------ - ----------------------------------- */

class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        return 'Sonido de animal'
    }
}

class Perro extends Animal {
    constructor(nombre){
        super(nombre)
    }
}

const perro = new Perro('Firulais')
console.log(perro.hacerSonido());