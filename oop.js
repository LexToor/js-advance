'use strict'

//10

// Базовый класс Device
class Device {
    constructor(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Название устройства должно быть непустой строкой');
        }
        this.name = name.trim();
    }
    
    getName() {
        return this.name;
    }
}

// Миксин Connectable
const Connectable = {
    connect() {
        this._isConnected = true;
    },
    
    disconnect() {
        this._isConnected = false;
    },
    
    getStatus() {
        return this._isConnected ? "Connected" : "Disconnected";
    }
};

// Класс SmartPhone
class SmartPhone extends Device {
    constructor(name) {
        super(name);
        // Инициализируем состояние подключения (по умолчанию - отключено)
        this._isConnected = false;
    }
}

// Применение миксина: копируем методы из Connectable в прототип SmartPhone
Object.assign(SmartPhone.prototype, Connectable);
//------------------------------------------------------------------------------------
//9

// class Engine {
//     constructor(power, fuelType) {
//         if(!Number.isFinite(power) || power <= 0) {
//             throw new Error('power положительное число.');
//         }
//         if(typeof fuelType !== 'string' || fuelType.trim() === '') {
//             throw new Error('fuelType не пустая строка.');
//         }
//         this.power = power;
//         this.fuelType = fuelType.trim();
//     }
    
//     getEngineInfo() {
//         return `Engine: ${this.power} HP, Fuel: ${this.fuelType}`;
//     }
// }

// class Car {
//     constructor(brand, model, engine) {
//         if(typeof brand !== 'string' || brand.trim() === '') {
//             throw new Error('brand не пустая строка.');
//         }
//         if(typeof model !== 'string' || model.trim() === '') {
//             throw new Error('model не пустая строка.');
//         }

//         if(!(engine instanceof Engine)) {
//             throw new Error('engine экземпляр класса Engine.');
//         }
        
//         this.brand = brand.trim();
//         this.model = model.trim();
//         this.engine = engine;       
//     }
    
//     getFullInfo() {
//         return `Car: ${this.brand} ${this.model}, ${this.engine.getEngineInfo()}`;
//     }
// }

// const car = new Car("Toyota", "Camry", new Engine(200, "Gasoline"));
// console.log(car.getFullInfo());
//------------------------------------------------------------------------------------
//8

// class EventEmitter {
//     constructor() {
//         // Храним обработчики в объекте: ключ — имя события, значение — массив функций
//         this.events = {};
//     }

//     on(eventName, callback) {
//         if (typeof callback !== 'function') {
//             throw new Error('Callback must be a function');
//         }

//         if (!this.events[eventName]) {
//             this.events[eventName] = [];
//         }

//         this.events[eventName].push(callback);
//     }

//     emit(eventName, data) {
//         // Если для события нет обработчиков — ничего не делаем
//         if (!this.events[eventName] || this.events[eventName].length === 0) {
//             return;
//         }

//         // Вызываем все обработчики в порядке регистрации
//         this.events[eventName].forEach(callback => {
//             callback(data);
//         });
//     }

//     off(eventName, callback) {
//         // Если события нет или массив пуст — ничего не делаем
//         if (!this.events[eventName]) {
//             return;
//         }

//         // Находим индекс обработчика и удаляем его
//         const index = this.events[eventName].indexOf(callback);
//         if (index !== -1) {
//             this.events[eventName].splice(index, 1);
//         }
//     }
// }
//------------------------------------------------------------------------------------
//7

// class Shape {
//     constructor() {
//     }

//     getArea() {
//         throw new Error('getArea must be implemented in subclass');
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         if(!Number.isFinite(width) || width <= 0) {
//             throw new Error('width должен быть положительным числом');
//         }
//         if(!Number.isFinite(height) || height <= 0) {
//             throw new Error('height должен быть положительным числом');
//         }

//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         if(!Number.isFinite(radius) || radius <= 0) {
//             throw new Error('radius должен быть положительным числом');
//         }
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;

//     }
// }
//------------------------------------------------------------------------------------
//6

// class ArrayHelper {
//     /**
//      * Находит объект с максимальным значением свойства value
//      * @param {Array} arr - массив объектов со свойством value
//      * @returns {Object|null} объект с максимальным value или null для пустого массива
//      */
//     static findMax(arr) {
//         if (!Array.isArray(arr) || arr.length === 0) {
//             return null;
//         }
        
//         return arr.reduce((max, current) => 
//             current.value > max.value ? current : max
//         );
//     }

//     /**
//      * Считает количество элементов в массиве
//      * @param {Array} arr - любой массив
//      * @returns {number} количество элементов
//      */
//     static countItems(arr) {
//         if (!Array.isArray(arr)) {
//             return 0;
//         }
        
//         return arr.length;
//     }
// }

// // Тестовые данные
// const items = [
//     {value: 10, type: 'A'},
//     {value: 25, type: 'B'},
//     {value: 5, type: 'A'},
//     {value: 15, type: 'C'}
// ];
//------------------------------------------------------------------------------------
//5

// // Конструктор для базового транспортного средства
// function Vehicle(type, speed) {
//     if (typeof type !== 'string') {
//         throw new Error('Type must be a string');
//     }
//     if (typeof speed !== 'number' || speed <= 0) {
//         throw new Error('Speed must be a positive number');
//     }
    
//     this.type = type;
//     this.speed = speed;
// }

// // Метод в прототипе базового конструктора
// Vehicle.prototype.getInfo = function() {
//     return `Vehicle: ${this.type}, Speed: ${this.speed} km/h`;
// };

// // Конструктор для автомобиля, наследуется от Vehicle
// function Car(type, speed, doors) {
//     // Вызываем конструктор родителя
//     Vehicle.call(this, type, speed);
    
//     if (typeof doors !== 'number' || doors <= 0) {
//         throw new Error('Doors must be a positive number');
//     }
    
//     this.doors = doors;
// }

// // Настраиваем прототип через Object.create
// Car.prototype = Object.create(Vehicle.prototype);

// // Восстанавливаем конструктор в прототипе
// Car.prototype.constructor = Car;

// // Переопределяем метод getInfo для Car
// Car.prototype.getInfo = function() {
//     return `Car: ${this.type}, Speed: ${this.speed} km/h, Doors: ${this.doors}`;
// };

// // Примеры использования:

// // Пример 1: создание экземпляра Vehicle
// const bike = new Vehicle("Bike", 25);
// console.log(bike.getInfo()); // "Vehicle: Bike, Speed: 25 km/h"

// // Пример 2: создание экземпляра Car
// const sedan = new Car("Sedan", 120, 4);
// console.log(sedan.getInfo()); // "Car: Sedan, Speed: 120 km/h, Doors: 4"
//------------------------------------------------------------------------------------
//4

// class BankAccount {
//     #accountNumber;
//     #balance;
//     constructor(account, amount) {
//         if(typeof account !== 'string' || account.trim() === '') {
//             throw new Error('Номер счета не пустая строка.');
//         }
//         if(typeof amount !== 'number' || amount < 0) {
//             throw new Error('Баланс не отрицательное число.');
//         }
//         this.#accountNumber = account;
//         this.#balance = amount;
//     }

//     get accountNumber() {
//         return this.#accountNumber;
//     }

//     get balance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         if(typeof amount !== 'number' || amount <= 0) {
//             throw new Error('Укажите положительное число.');
//         }
//         this.#balance += amount;
//         return this;        
//     }
    
//     withdraw(amount) {
//         if(typeof amount !== 'number' || amount <= 0) {
//             throw new Error('Укажите положительное число.');
//         }
//         if(this.#balance - amount < 0) {
//             throw new Error('Ндостаточно средств.');
//         }
//         this.#balance -= amount;
//         return this; 
//     }
    
//     getAccountNumber() {
//         return this.#accountNumber;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }
//------------------------------------------------------------------------------------
//3

// class Calculator {
//     #value;
//     constructor(value) {
//         if(typeof value !== 'number') {
//             throw new Error('Укажите число');
//         }
//         this.#value = value;
//     }
    
//     add(number) {
//         if(typeof number !== 'number') {
//             throw new Error('Укажите число');
//         }
//         this.#value += number;
//         return this;        
//     }
    
//     subtract(number) {
//         if(typeof number !== 'number') {
//             throw new Error('Укажите число');
//         }
//         this.#value -= number;
//         return this;    }
    
//     multiply(number) {
//         if(typeof number !== 'number') {
//             throw new Error('Укажите число');
//         }
//         this.#value *= number;
//         return this;    }
    
//     divide(number) {
//         if(typeof number !== 'number') {
//             throw new Error('Укажите число');
//         }
//         if(number === 0) {
//             this.#value = 0;
//             return this;
//         }
//         this.#value /= number;
//         return this;    }
    
//     getValue() {
//         return this.#value;
//     }
// }
//------------------------------------------------------------------------------------
//2

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
    
//     getInfo() {
//         return `Employee ${this.name} earns ${this.salary}`;
//     }
// }

// class Manager extends Employee {
//     employees;
//     constructor(name, salary, employees) {
//         super(name, salary);
//         this.employees = employees;
//     }
//     getInfo() {
//         return `Manager ${this.name} earns ${this.salary} and manages ${this.employees} employees`;
//     }
// }
//------------------------------------------------------------------------------------
//1 

// class Product {
//     #name;
//     #price;
//     constructor(name, price) {
//         if (typeof name !== 'string' || name.trim() === '') {
//             throw new Error('Название не должно быть пустой строкой');
//         }
//         if (typeof price !== 'number' || price < 0) {
//             throw new Error('Цена должна быть положительным числом');
//         }
//         this.#name = name.trim();
//         this.#price = price;
//     }

//     getName() {
//         return this.#name;
//     }

//     getPrice() {
//         return this.#price;
//     }
// }
//------------------------------------------------------------------------------------