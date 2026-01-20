class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable(){
        return this.nombre;
    }

    getCuentaIndividual(){
        return this.contador;
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal;
    }

    contar(){
        this.contador++;
        Contador.contadorGlobal++;
    }
}

const contador1 = new Contador('Carlos')
const contador2 = new Contador('Susana')

console.log(contador1.getResponsable());
console.log(contador2.getResponsable());
contador1.contar()  //sumamos a carlos
contador1.contar()  //sumamos a carlos
contador2.contar()  //sumamos a susana
console.log('Contador de Carlos = ', contador1.getCuentaIndividual());
console.log('Contador de susana = ', contador2.getCuentaIndividual());
console.log(Contador.contadorGlobal);




