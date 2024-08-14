// 2. Representa mediante un diagrama de clases la siguiente especificación sobre una empresa:
// • Una aplicación necesita almacenar información sobre empresas, sus empleados y sus clientes.
// • Ambos se caracterizan por su nombre y edad.
// • Los empleados tienen un sueldo bruto, los empleados que son directivos tienen una categoría, así como un conjunto de empleados subordinados.
// • De los clientes además se necesita conocer su teléfono de contacto.
// • La aplicación necesita mostrar los datos de empleados y clientes.

class Empresa {
  constructor(nit, nombre, direccion) {
    this.nit = nit
    this.nombre = nombre
    this.direccion = direccion
    this.empleados = []
    this.personas = []
  }

  agregarEmpleado(empleado) {
    this.empleados.push(empleado)
  }
  mostrarEmpleados() {
    let empleados = ''
    this.empleados.forEach(empleado => {
      empleados += empleado.mostrarInfo()
    })
    return `Empleados:
    ${empleados}`
  }

  agregarCliente(cliente) {
    this.clientes.push(cliente)
  }
  mostrarClientes() {
    let clientes = ''
    this.clientes.forEach(cliente => {
      clientes += cliente.mostrarInfo()
    })
    return `Clientes:
    ${clientes}`
  }

  mostrarInfo() {
    return `Nit: ${this.nit}
    Nombre: ${this.nombre}
    Direccion: ${this.direccion}
    --------------------------------------
    Empleados: ${this.mostrarEmpleados()}
    --------------------------------------
    Clientes: ${this.mostrarClientes()}`
  }
}

class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}
    Edad: ${this.edad}`
  }
}

class Cliente extends Persona {
  constructor (nombre, edad, telefono) {
    super(nombre, edad)
    this.telefono = telefono
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}
    Edad: ${this.edad}
    Telefono: ${this.telefono}`
  }
}

class Empleado extends Persona {
  constructor (codigoE, nombre, edad, sueldoBruto, codigoJefe) {
    super(nombre, edad)
    this.codigoE = codigoE
    this.sueldoBruto = sueldoBruto
    this.categoria = categoria
    this.codigoJefe = codigoJefe
  }

  definirTipo() {
    if(this.codigoJefe === 0) {
      this.categoria = 'Directivo'
    } else if (this.codigoJefe > 0) {
      this.categoria = 'Subordinado'
    }
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}
    Edad: ${this.edad}
    Codigo: ${this.codigoE}
    Sueldo Bruto: ${this.sueldoBruto}
    Categoría: ${this.categoria}
    Codigo Jefe: ${this.codigoJefe}`
  }
}

let persona1 = new Persona('Patricia', 23)
let persona2 = new Persona('Roberto', 33)
let persona3 = new Persona('Elena', 24)
let persona4 = new Persona('Alejandro', 53)
let persona5 = new Persona('Isabel', 26)

let cliente1 = new Cliente('Patricia', 23, 123456789)
let cliente2 = new Cliente('Roberto', 33, 123456789)
let cliente3 = new Cliente('Elena', 24, 123456789)
let cliente4 = new Cliente('Alejandro', 53, 123456789)
let cliente5 = new Cliente('Isabel', 26, 123456789)

let empleado1 = new Empleado(1, 'Patricia', 23, 123456789, 0)
let empleado2 = new Empleado(2, 'Roberto', 33, 123456789, 0)
let empleado3 = new Empleado(3, 'Elena', 24, 123456789, 0)
let empleado4 = new Empleado(4, 'Alejandro', 53, 123456789, 1)
let empleado5 = new Empleado(5, 'Isabel', 26, 123456789, 1)

empleado1.definirTipo()
empleado2.definirTipo()
empleado3.definirTipo()
empleado4.definirTipo()
empleado5.definirTipo()

let empresa1 = new Empresa(123456789, 'Coca Cola', 'Calle 123')


