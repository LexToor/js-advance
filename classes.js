// 10

class Circle {
    constructor(radius) {
        if(typeof radius !== 'number' || radius <= 0) {
            throw new Error('Радиус - положительное число');
        }
        this._radius = radius;
    }
    
    getArea() {
        return Math.PI * this._radius ** 2;
    }
}
//-------------------------------------------------------------------------
// 9

// const baseAnimal = {
//   move() {
//     return "Животное двигается";
//   }
// };

// class Animal {
//   constructor(name, sound) {
//     // Проверка входных данных
//     if (typeof name !== 'string' || name.trim() === '') {
//       throw new Error('Название животного должно быть непустой строкой');
//     }
//     if (typeof sound !== 'string' || sound.trim() === '') {
//       throw new Error('Звук должен быть непустой строкой');
//     }

//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     return `${this.name} издает звук: ${this.sound}`;
//   }
// }

// Связываем прототип класса с базовым прототипом
// Object.setPrototypeOf(Animal.prototype, baseAnimal);
//-------------------------------------------------------------------------
// 8

// class Shape {
//   static {
//     Shape.defaultColor = "blue";
//   }
// }
//-------------------------------------------------------------------------
// 7

// class Library {
//   constructor() {
//     this.books = [];
//   }
  
//   addBook(title) {
//     if(typeof title !== 'string' || title.trim() === '') {
//         throw new Error('Название книги - непустая строка.');
//     }
//     this.books.push(title.trim());
//     return this.books.length;
//   }
// }

// Пример использования:
// const library = new Library();
// console.log(library.addBook("Гарри Поттер")); // 1
// console.log(library.addBook("Властелин колец")); // 2
//-------------------------------------------------------------------------
// 6

// class Vehicle {
//     static count = 0;
//     constructor() {
//         Vehicle.count++;        
//     }
//     // Ваш код здесь
// }
//-------------------------------------------------------------------------
// 5

// class Temperature {
//   constructor() {
//     this._celsius = 0; // Инициализируем начальное значение (можно выбрать любое корректное)
//   }

//   get celsius() {
//     return this._celsius;
//   }

//   set celsius(value) {
//     // Проверяем, что переданное значение — число
//     if (typeof value !== 'number') {
//       throw new Error('Некорректная температура');
//     }

//     // Проверяем диапазон: от -273 до 1000
//     if (value < -273 || value > 1000) {
//       throw new Error('Некорректная температура');
//     }

//     this._celsius = value;
//   }
// }
//-------------------------------------------------------------------------
// 4

// class User {
//     static isValidEmail(email) {
//         if(typeof email !== 'string') return false;
//         const atIndex = email.indexOf('@');
//         const dotIndex = email.lastIndexOf('.');
//         if(atIndex === -1) return false;
//         if(dotIndex === -1) return false;
//         if(atIndex > dotIndex || dotIndex === email.length - 1) 
//             return false;
//         return true;
//     }
// }
//-------------------------------------------------------------------------
// 3

// class Book {
//     constructor(name, author)  {
//         if (typeof name !== 'string' || name.trim() === '') {
//             throw new Error('Название товара должно быть непустой строкой');
//         }
//         if (typeof author !== 'string' || author.trim() === '') {
//             throw new Error('Название товара должно быть непустой строкой');
//         }

//         this.name = name;
//         this.author = author;
//     }

//     get fullTitle() {
//         return `${this.name} - ${this.author}`;
//     }
// }

// // Пример использования:
// const book1 = new Book("1984", "Джордж Оруэлл");
// console.log(book1.fullTitle);

// const book2 = new Book("Война и мир", "Лев Толстой");
// console.log(book2.fullTitle);
//-------------------------------------------------------------------------
// 2

// class Calculator {
//     constructor () {

//     }

//     add(num1, num2) {
//         if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//             throw new Error('Слогаемое должно быть число.');
//         }

//         return num1 + num2;
//     }
// }
//-------------------------------------------------------------------------
// 1

// class Product {
//   constructor(name, price) {
//     // Проверка корректности входных данных
//     if (typeof name !== 'string' || name.trim() === '') {
//       throw new Error('Название товара должно быть непустой строкой');
//     }
//     if (typeof price !== 'number' || price <= 0) {
//       throw new Error('Цена должна быть положительным числом');
//     }

//     this.name = name;
//     this.price = price;
//   }

//   getInfo() {
//     return `Товар: ${this.name}, Цена: ${this.price} руб.`;
//   }
// }
//-------------------------------------------------------------------------