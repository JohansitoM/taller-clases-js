// 1. Representa mediante un diagrama de clases la siguiente especificación sobre los
// matrimonios civiles realizados en la ciudad de Morelia.
// • De cada matrimonio se almacena la fecha, el lugar de la celebración y los datos
// personales (nombre, apellidos, edad, sexo y domicilio) de los contrayentes.
// • Igualmente se guardan los datos personales de los dos testigos y de la autoridad civil
// (juez o autoridad municipal) que formaliza el acto.

class Matrimonio {
    constructor(fecha, lugar, juez, contrayentes, testigos) {
        this.fecha = fecha
        this.lugar = lugar
        this.juez = juez
        this.contrayentes = contrayentes
        this.testigos = testigos
    }

    mostrarInfo() {
        let testigos = ''
        this.testigos.forEach(testigo => {
            testigos += testigo.mostrarInfo()})
        return `Matrinmonio:
        Fecha: ${this.fecha}
        Lugar: ${this.lugar}
        --------------------------------------
        Juez: ${this.juez.mostrarInfo()}
        --------------------------------------
        Contrayentes: ${this.mostrarPareja()}
        --------------------------------------
        Testigos: ${testigos}`
    }
    mostrarPareja() {
        let contrayentes = ''
        for(let i = 0; i < this.contrayentes.length; i++) {
            contrayentes += this.contrayentes[i].mostrarInfo()
        }
        return `Contrayentes: ${contrayentes}`
    }
}

class Persona {
    constructor (nombre, apellido, edad, sexo, domicilio, cargo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sexo = sexo
        this.domicilio = domicilio
        this.cargo = cargo
    }
    
    mostrarInfo() {
        return `
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Edad: ${this.edad}
            Sexo: ${this.sexo}
            Domicilio: ${this.domicilio}
            Cargo: ${this.cargo}`
    }
}

let persona1 = new Persona('Patricia', 'Muñoz', 23, 'F', 'Calle 123', 'contrayente')
let persona2 = new Persona('Roberto', 'Ramírez', 33, 'M', 'Calle 456', 'contrayente')
let persona4 = new Persona('Alejandro', 'Ortiz', 53, 'M', 'Calle 321', 'Testigo')
let persona5 = new Persona('Isabel', 'Gutiérrez', 26, 'F', 'Calle 654', 'Testigo')
let persona3 = new Persona('Elena', 'Torres', 24, 'F', 'Calle 789', 'Juez')

let contrayentes = []
contrayentes.push(persona1, persona2)

let testigos = []
testigos.push(persona4, persona5)

let matrimonio = new Matrimonio('01/01/2022', 'El Mar', persona3, contrayentes, testigos)

console.log(matrimonio.mostrarInfo())  

