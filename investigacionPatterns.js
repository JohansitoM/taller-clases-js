class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = [];

    Singleton.instance = this;

    return this;
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  addData(item) {
    this.data.push(item);
  }
  getData() {
    return this.data;
  }
}
const instance1 = Singleton.getInstance();
instance1.addData("Item 1");

const instance2 = Singleton.getInstance();
console.log(instance2.getData());

console.log(instance1 === instance2);

// Observer

class Blog {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify(newPost) {
    this.subscribers.forEach((subscriber) => subscriber.update(newPost));
  }
  publishPost(post) {
    console.log(`Blog: Publicación nueva -> ${post}`);
    this.notify(post);
  }
}

// Observador
class Subscriber {
  constructor(name) {
    this.name = name;
  }
  update(post) {
    console.log(
      `${this.name} ha sido notificado sobre la nueva publicación: ${post}`
    );
  }
}
const blog = new Blog();

const subscriber1 = new Subscriber("Usuario 1");
const subscriber2 = new Subscriber("Usuario 2");

blog.subscribe(subscriber1);
blog.subscribe(subscriber2);

blog.publishPost("Aprendiendo el patrón Observer en JavaScript");

blog.unsubscribe(subscriber1);

blog.publishPost("Nuevas funcionalidades en ECMAScript 2024");

// Factory

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  getDescription() {
    return `Este es un vehículo de tipo: ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super("Coche");
  }
}

class Bike extends Vehicle {
  constructor() {
    super("Bicicleta");
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Tipo de vehículo no soportado");
    }
  }
}
const car = VehicleFactory.createVehicle("car");
console.log(car.getDescription());

const bike = VehicleFactory.createVehicle("bike");
console.log(bike.getDescription());

const Module = (function () {
  let privateCounter = 0;

  function increment() {
    privateCounter++;
  }
  function decrement() {
    privateCounter--;
  }
  function getCounter() {
    return privateCounter;
  }

  return {
    incrementCounter: function () {
      increment();
    },
    decrementCounter: function () {
      decrement();
    },
    getCounterValue: function () {
      return getCounter();
    },
  };
})();
console.log(Module.getCounterValue()); // Salida: 0
Module.incrementCounter();
console.log(Module.getCounterValue()); // Salida: 1
Module.decrementCounter();
console.log(Module.getCounterValue()); // Salida: 0

class EstrategiaPago {
  pagar(monto) {
    throw new Error("Método 'pagar' debe ser implementado.");
  }
}

class EstrategiaPayPal extends EstrategiaPago {
  pagar(monto) {
    console.log(`Pagando ${monto} usando PayPal.`);
  }
}

class EstrategiaTarjeta extends EstrategiaPago {
  pagar(monto) {
    console.log(`Pagando ${monto} usando Tarjeta de Crédito.`);
  }
}

class EstrategiaBitcoin extends EstrategiaPago {
  pagar(monto) {
    console.log(`Pagando ${monto} usando Bitcoin.`);
  }
}
class Carrito {
  constructor(estrategiaPago) {
    this.estrategiaPago = estrategiaPago;
  }

  establecerEstrategia(estrategiaPago) {
    this.estrategiaPago = estrategiaPago;
  }

  pagar(monto) {
    console.log("Realizando el pago...");
    this.estrategiaPago.pagar(monto);
  }
}
const carrito = new Carrito(new EstrategiaPayPal());
carrito.pagar(100);

carrito.establecerEstrategia(new EstrategiaTarjeta());
carrito.pagar(200);

carrito.establecerEstrategia(new EstrategiaBitcoin());
carrito.pagar(300);
