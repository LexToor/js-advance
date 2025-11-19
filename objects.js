'use strict'

//10
function Recipe(name, cookingTime, ingredients) {
    // Проверка названия блюда
    if (typeof name !== 'string' || name.trim().length === 0) {
        throw new Error('Название блюда не может быть пустой строкой');
    }
    
    
    // Проверка времени приготовления
    if (typeof cookingTime !== 'number' || !Number.isInteger(cookingTime) || cookingTime <= 0) {
        throw new Error('Время приготовления должно быть положительным целым числом');
    }
    
    
    // Проверка списка ингредиентов
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        throw new Error('Список ингредиентов должен быть непустым массивом');
    }
    
    // Инициализация свойств
    this.name = name.trim();
    this.cookingTime = cookingTime;
    this.ingredients = ingredients;
}

// Добавление методов в прототип Recipe
Recipe.prototype.getInfo = function() {
    return `Recipe { name: "${this.name}", cookingTime: ${this.cookingTime} min, ingredients: [${this.ingredients.join(', ')}] }`;
};

Recipe.prototype.addIngredient = function(ingredient) {
    if (typeof ingredient !== 'string' || ingredient.trim().length === 0) {
        throw new Error('Ингредиент должен быть непустой строкой');
    }
    this.ingredients.push(ingredient.trim());
    console.log(`Ингредиент "${ingredient}" добавлен в рецепт "${this.name}".`);
};

Recipe.prototype.scaleServings = function(factor) {
    if (typeof factor !== 'number' || factor <= 0) {
        throw new Error('Коэффициент масштабирования должен быть положительным числом');
    }
    this.cookingTime = Math.round(this.cookingTime * factor);
    console.log(`Время приготовления масштабировано до ${this.cookingTime} мин для коэффициента ${factor}.`);
};

// Создание объекта без прототипа (или с другим прототипом)
const rawRecipe = {
    name: "Pasta Carbonara",
    cookingTime: 25,
    ingredients: ["pasta", "eggs", "bacon", "cheese"]
};

console.log('Объект до установки прототипа:');
console.log(rawRecipe);
console.log('Имеет ли метод getInfo?', typeof rawRecipe.getInfo === 'function'); // false


// Установка прототипа через Object.setPrototypeOf
Object.setPrototypeOf(rawRecipe, Recipe.prototype);


console.log('\nОбъект после установки прототипа Recipe.prototype:');
console.log(rawRecipe);
console.log('Теперь имеет метод getInfo:', typeof rawRecipe.getInfo === 'function'); // true


// Демонстрация работы методов прототипа
console.log('\nВызов метода getInfo():');
console.log(rawRecipe.getInfo());


console.log('\nДобавление ингредиента:');
rawRecipe.addIngredient("pepper");
console.log(rawRecipe.getInfo());


console.log('\nМасштабирование порций (x1.5):');
rawRecipe.scaleServings(1.5);
console.log(rawRecipe.getInfo());

// Создание экземпляра через конструктор для сравнения
const recipe2 = new Recipe("Chocolate Cake", 60, ["flour", "sugar", "cocoa", "eggs", "butter"]);


console.log('\nРецепт, созданный через конструктор:');
console.log(recipe2.getInfo());
//----------------------------------------------------------------------------------------
// 9
// function Player(name, number, position) {
//     // Проверка имени игрока
//     if (typeof name !== 'string' || name.trim().length === 0) {
//         throw new Error('Имя игрока не может быть пустой строкой');
//     }
    
//     // Проверка номера
//     if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
//         throw new Error('Номер должен быть положительным целым числом');
//     }
    
//     // Проверка позиции
//     if (typeof position !== 'string' || position.trim().length === 0) {
//         throw new Error('Позиция не может быть пустой строкой');
//     }

//     // Инициализация свойств
//     this.name = name.trim();
//     this.number = number;
//     this.position = position.trim();

//     // Добавление неперечисляемого свойства через Object.defineProperty
//     Object.defineProperty(this, 'team', {
//         value: 'Unknown', // начальное значение
//         writable: true,      // можно изменять
//         enumerable: false,  // неперечисляемое (не будет видно в for...in, Object.keys и т.п.)
//         configurable: true     // можно переопределять/удалять
//     });
// }

// // Создание экземпляров игроков
// const player1 = new Player("Lionel Messi", 10, "Forward");
// const player2 = new Player("Cristiano Ronaldo", 7, "Forward");

// // Демонстрация результатов
// console.log('Игрок 1:');
// console.log(player1);
// console.log('Собственные перечисляемые свойства (Object.keys):', Object.keys(player1));
// console.log('Все собственные свойства (Object.getOwnPropertyNames):', Object.getOwnPropertyNames(player1));


// console.log('\nИгрок 2:');
// console.log(player2);
// console.log('Собственные перечисляемые свойства (Object.keys):', Object.keys(player2));
// console.log('Все собственные свойства (Object.getOwnPropertyNames):', Object.getOwnPropertyNames(player2));


// // Проверка работы неперечисляемого свойства
// console.log('\nПроверка неперечисляемого свойства "team":');
// console.log('player1.team:', player1.team);
// console.log('player2.team:', player2.team);


// // Попытка изменить значение неперечисляемого свойства
// player1.team = 'FC Barcelona';
// player2.team = 'Manchester United';


// console.log('После изменения:');
// console.log('player1.team:', player1.team); // FC Barcelona
// console.log('player2.team:', player2.team); // Manchester United


// // Демонстрация того, что свойство не появляется в перечисляемых списках
// console.log('\nПовторная проверка перечисляемых свойств:');
// console.log('Object.keys(player1):', Object.keys(player1)); // не содержит 'team'
// console.log('Object.getOwnPropertyNames(player1):', Object.getOwnPropertyNames(player1)); // содержит 'team'
//----------------------------------------------------------------------------------------
// 8
// function Track(title, artist, duration) {
//     // Проверка названия трека
//     if (typeof title !== 'string' || title.trim().length === 0) {
//         throw new Error('Название трека не может быть пустой строкой');
//     }
    
//     // Проверка исполнителя
//     if (typeof artist !== 'string' || artist.trim().length === 0) {
//         throw new Error('Исполнитель не может быть пустой строкой');
//     }
    
//     // Проверка длительности
//     if (typeof duration !== 'number' || !Number.isInteger(duration) || duration <= 0) {
//         throw new Error('Длительность должна быть положительным целым числом');
//     }
    
//     // Инициализация свойств
//     this.title = title.trim();
//     this.artist = artist.trim();
//     this.duration = duration;
// }

// // Создание экземпляров треков
// const track1 = new Track("Bohemian Rhapsody", "Queen", 355);
// const track2 = new Track("Imagine", "John Lennon", 183);

// // Получение всех собственных свойств экземпляра через Object.getOwnPropertyNames
// const track1Properties = Object.getOwnPropertyNames(track1);
// const track2Properties = Object.getOwnPropertyNames(track2);

// // Демонстрация результатов
// console.log('Трек 1:');
// console.log(track1);
// console.log('Собственные свойства:', track1Properties);

// console.log('\nТрек 2:');
// console.log(track2);
// console.log('Собственные свойства:', track2Properties);

// // Дополнительная проверка — убедимся, что методы прототипа не включены
// console.log('\nПроверка прототипа:');
// console.log('Track.prototype:', Track.prototype);
// console.log('track1.__proto__ === Track.prototype:', track1.__proto__ === Track.prototype);
//----------------------------------------------------------------------------------------
// 7
// function Account(accountNumber, owner, balance) {
//     // Проверка номера счёта
//     if (typeof accountNumber !== 'string' || accountNumber.trim().length === 0) {
//         throw new Error('Номер счёта не может быть пустой строкой');
//     }
    
    
//     // Проверка владельца счёта
//     if (typeof owner !== 'string' || owner.trim().length === 0) {
//         throw new Error('Владелец счёта не может быть пустой строкой');
//     }
    
    
//     // Проверка начального баланса
//     if (typeof balance !== 'number' || balance < 0) {
//         throw new Error('Начальный баланс должен быть неотрицательным числом');
//     }
    
    
//     // Инициализация свойств
//     this.accountNumber = accountNumber.trim();
//     this.owner = owner.trim();
//     this.balance = balance;
// }

// // Добавление методов в прототип
// Account.prototype.getInfo = function() {
//     return `Account { accountNumber: "${this.accountNumber}", owner: "${this.owner}", balance: ${this.balance} }`;
// };

// Account.prototype.deposit = function(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Сумма пополнения должна быть положительным числом');
//     }
//     this.balance += amount;
//     console.log(`Счёт ${this.accountNumber} пополнен на ${amount}. Текущий баланс: ${this.balance}`);
// };

// Account.prototype.withdraw = function(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Сумма снятия должна быть положительным числом');
//     }
//     if (amount > this.balance) {
//         throw new Error('Недостаточно средств на счёте');
//     }
//     this.balance -= amount;
//     console.log(`Со счёта ${this.accountNumber} снято ${amount}. Текущий баланс: ${this.balance}`);
// };

// // Создание экземпляров банковских счетов
// const account1 = new Account("ACC001", "Alice Johnson", 1500);
// const account2 = new Account("ACC002", "Bob Wilson", 2500);

// // Демонстрация работы
// console.log('Созданные счета:');
// console.log(account1.getInfo());
// console.log(account2.getInfo());


// // Получение прототипа через Object.getPrototypeOf
// console.log('\nПолучение прототипа экземпляров:');
// const proto1 = Object.getPrototypeOf(account1);
// const proto2 = Object.getPrototypeOf(account2);

// console.log('Прототип account1:', proto1);
// console.log('Прототип account2:', proto2);


// // Проверка, что прототипы совпадают и соответствуют Account.prototype
// console.log('\nПроверка прототипов:');
// console.log(`proto1 === Account.prototype: ${proto1 === Account.prototype}`); // true
// console.log(`proto2 === Account.prototype: ${proto2 === Account.prototype}`); // true
// console.log(`account1.__proto__ === proto1: ${account1.__proto__ === proto1}`); // true


// // Демонстрация работы методов прототипа
// console.log('\nОперации со счетами:');
// account1.deposit(500);
// account1.withdraw(200);
// console.log(account1.getInfo());


// account2.deposit(1000);
// console.log(account2.getInfo());
//----------------------------------------------------------------------------------------
// 6
// function Employee(name, position, salary) {
//     // Проверка имени
//     if (typeof name !== 'string' || name.trim().length === 0) {
//         throw new Error('Имя сотрудника не может быть пустой строкой');
//     }
    
//     // Проверка должности
//     if (typeof position !== 'string' || position.trim().length === 0) {
//         throw new Error('Должность не может быть пустой строкой');
//     }
    
//     // Проверка зарплаты
//     if (typeof salary !== 'number' || salary <= 0) {
//         throw new Error('Зарплата должна быть положительным числом');
//     }
    
//     // Инициализация свойств
//     this.name = name.trim();
//     this.position = position.trim();
//     this.salary = salary;
// }

// // Добавление метода в прототип
// Employee.prototype.getInfo = function() {
//     return `Employee { name: "${this.name}", position: "${this.position}", salary: ${this.salary} }`;
// };

// // Добавление прототипного свойства (будет общим для всех экземпляров)
// Employee.prototype.company = 'Unknown';

// // Создание экземпляров сотрудников
// const employee1 = new Employee("John Smith", "Developer", 75000);
// const employee2 = new Employee("Jane Doe", "Manager", 85000);

// // Демонстрация начального состояния
// console.log('Начальное состояние:');
// console.log(employee1.getInfo());
// console.log(`Компания: ${employee1.company}`);
// console.log(employee2.getInfo());
// console.log(`Компания: ${employee2.company}`);

// // Изменение прототипного свойства
// console.log('\nМеняем Employee.prototype.company на "TechCorp"...');
// Employee.prototype.company = 'TechCorp';

// // Демонстрация влияния изменения прототипа на существующие экземпляры
// console.log('Состояние после изменения прототипа:');
// console.log(employee1.getInfo());
// console.log(`Компания: ${employee1.company}`); // Теперь 'TechCorp'
// console.log(employee2.getInfo());
// console.log(`Компания: ${employee2.company}`); // Теперь 'TechCorp'

// // Добавление нового метода в прототип
// console.log('\nДобавляем метод promote в прототип...');
// Employee.prototype.promote = function(newPosition, newSalary) {
//     this.position = newPosition;
//     this.salary = newSalary;
//     console.log(`${this.name} повышен до ${newPosition} с зарплатой ${newSalary}`);
// };

// // Использование нового метода у существующих экземпляров
// console.log('Применяем promotion к employee1:');
// employee1.promote('Senior Developer', 90000);
// console.log(employee1.getInfo());

// // Проверка, что новый метод доступен и для employee2
// console.log('Проверяем, что employee2 тоже имеет метод promote:');
// employee2.promote('Senior Manager', 100000);
// console.log(employee2.getInfo());
//----------------------------------------------------------------------------------------
// 5
// function Task(title, priority, completed) {
//     // Проверка названия задачи
//     if (typeof title !== 'string' || title.trim().length === 0) {
//         throw new Error('Название задачи не может быть пустой строкой');
//     }
    
//     // Проверка приоритета
//     const validPriorities = ['low', 'medium', 'high'];
//     if (typeof priority !== 'string' || !validPriorities.includes(priority)) {
//         throw new Error('Приоритет должен быть одним из: "low", "medium", "high"');
//     }
    
//     // Проверка статуса выполнения
//     if (typeof completed !== 'boolean') {
//         throw new Error('Статус выполнения должен быть булевым значением');
//     }
    
//     // Инициализация свойств
//     this.title = title.trim();
//     this.priority = priority;
//     this.completed = completed;
// }

// // Добавляем методы в прототип конструктора Task
// Task.prototype.getInfo = function() {
//     return `Task { title: "${this.title}", priority: "${this.priority}", completed: ${this.completed} }`;
// };

// Task.prototype.toggleCompleted = function() {
//     this.completed = !this.completed;
// };

// // Создание прототипа для Object.create (можно использовать тот же интерфейс)
// const taskProto = {
//     getInfo: Task.prototype.getInfo,
//     toggleCompleted: Task.prototype.toggleCompleted,
//     isPrototype: true
// };

// // Создание экземпляров через конструктор
// const task1 = new Task("Complete project", "high", false);
// const task2 = new Task("Review code", "medium", true);

// // Создание объектов через Object.create с заданным прототипом
// const task3 = Object.create(taskProto);
// task3.title = "Write documentation";
// task3.priority = "low";
// task3.completed = false;

// const task4 = Object.create(taskProto);
// task4.title = "Fix bugs";
// task4.priority = "high";
// task4.completed = true;

// // Демонстрация результатов
// console.log('Экземпляры, созданные через конструктор (new Task):');
// console.log(task1.getInfo()); // Работает: метод есть в Task.prototype
// console.log(task2.getInfo());

// console.log('\nЭкземпляры, созданные через Object.create:');
// console.log(task3.getInfo()); // Работает: метод есть в taskProto
// console.log(task4.getInfo());

// console.log('\nПроверка прототипов и типов:');
// console.log(`task1 instanceof Task: ${task1 instanceof Task}`); // true
// console.log(`task2 instanceof Task: ${task2 instanceof Task}`); // true
// console.log(`task3 instanceof Task: ${task3 instanceof Task}`); // false
// console.log(`task4 instanceof Task: ${task4 instanceof Task}`); // false

// console.log(`\nhasOwnProperty для task1:`);
// console.log(`title: ${task1.hasOwnProperty('title')}`);       // true
// console.log(`priority: ${task1.hasOwnProperty('priority')}`); // true
// console.log(`completed: ${task1.hasOwnProperty('completed')}`); // true
// console.log(`getInfo: ${task1.hasOwnProperty('getInfo')}`);   // false (метод в прототипе)

// console.log(`\nДемонстрация метода toggleCompleted:`);
// task1.toggleCompleted();
// console.log(`После toggleCompleted: ${task1.getInfo()}`);

// task4.toggleCompleted();
// console.log(`После toggleCompleted (task4): ${task4.getInfo()}`);
//----------------------------------------------------------------------------------------
// 4
// function Product(name, price, category) {
//     // Проверка названия товара
//     if (typeof name !== 'string' || name.trim().length === 0) {
//         throw new Error('Название товара не может быть пустой строкой');
//     }
    
//     // Проверка цены
//     if (typeof price !== 'number' || price <= 0) {
//         throw new Error('Цена должна быть положительным числом');
//     }
    
//     // Проверка категории
//     if (typeof category !== 'string' || category.trim().length === 0) {
//         throw new Error('Категория не может быть пустой строкой');
//     }
    
//     // Инициализация свойств
//     this.name = name.trim();
//     this.price = price;
//     this.category = category.trim();
// }

// // Создание экземпляров и проверка instanceof
// const product1 = new Product("Laptop", 999.99, "Electronics");
// const product2 = new Product("Coffee", 12.50, "Beverages");

// // Проверка типа объектов с помощью instanceof
// console.log('Проверка типа product1:');
// console.log(`product1 является экземпляром Product: ${product1 instanceof Product}`); // true
// console.log(`product1 является экземпляром Object: ${product1 instanceof Object}`);     // true

// console.log('\nПроверка типа product2:');
// console.log(`product2 является экземпляром Product: ${product2 instanceof Product}`); // true
// console.log(`product2 является экземпляром Object: ${product2 instanceof Object}`);     // true

// // Дополнительно: проверка на случай, если объект создан не через конструктор
// const fakeProduct = { name: "Fake", price: 100, category: "Unknown" };
// console.log('\nПроверка фальшивого объекта:');
// console.log(`fakeProduct является экземпляром Product: ${fakeProduct instanceof Product}`); // false
//----------------------------------------------------------------------------------------
// 3
// function Student(name, age, course) {
//     // Проверка имени
//     if (typeof name !== 'string' || name.trim().length === 0) {
//         throw new Error('Имя студента не может быть пустой строкой');
//     }
    
//     // Проверка возраста
//     if (typeof age !== 'number' || !Number.isInteger(age) || age <= 0) {
//         throw new Error('Возраст должен быть положительным целым числом');
//     }
    
//     // Проверка курса
//     if (typeof course !== 'string' || course.trim().length === 0) {
//         throw new Error('Курс не может быть пустой строкой');
//     }
    
//     // Инициализация свойств
//     this.name = name.trim();
//     this.age = age;
//     this.course = course.trim();
// }

// // Создание экземпляров для тестирования
// const student1 = new Student("Alice", 20, "Computer Science");
// const student2 = new Student("Bob", 22, "Mathematics");

// // Проверка собственных свойств
// console.log('Проверка свойств student1:');
// console.log(`Имеет собственное свойство name: ${student1.hasOwnProperty('name')}`);  // true
// console.log(`Имеет собственное свойство age: ${student1.hasOwnProperty('age')}`);    // true
// console.log(`Имеет собственное свойство course: ${student1.hasOwnProperty('course')}`); // true
// console.log(`Имеет собственное свойство toString: ${student1.hasOwnProperty('toString')}`); // false

// console.log('\nПроверка свойств student2:');
// console.log(`Имеет собственное свойство name: ${student2.hasOwnProperty('name')}`);  // true
// console.log(`Имеет собственное свойство age: ${student2.hasOwnProperty('age')}`);    // true
// console.log(`Имеет собственное свойство course: ${student2.hasOwnProperty('course')}`); // true
// console.log(`Имеет собственное свойство hasOwnProperty: ${student2.hasOwnProperty('hasOwnProperty')}`); // false
//----------------------------------------------------------------------------------------
// 2
// function Car(brand, model, year) {
//     // Проверка марки автомобиля
//     if (typeof brand !== 'string' || brand.trim().length === 0) {
//         throw new Error('Марка автомобиля не может быть пустой строкой');
//     }
    
//     // Проверка модели автомобиля
//     if (typeof model !== 'string' || model.trim().length === 0) {
//         throw new Error('Модель автомобиля не может быть пустой строкой');
//     }
    
//     // Проверка года выпуска
//     if (typeof year !== 'number' || !Number.isInteger(year) || year <= 0) {
//         throw new Error('Год выпуска должен быть положительным целым числом');
//     }
    
//     // Инициализация свойств экземпляра
//     this.brand = brand.trim();
//     this.model = model.trim();
//     this.year = year;
// }

// // Добавление метода getInfo в прототип конструктора
// Car.prototype.getInfo = function() {
//     return `Car { brand: "${this.brand}", model: "${this.model}", year: ${this.year} }`;
// };

// const car1 = new Car("Toyota", "Camry", 2020);
// console.log(car1.getInfo());
//----------------------------------------------------------------------------------------
// 1
// function Book(title, author, pages) {
//     // Проверка, что название книги не пустая строка
//     if (typeof title !== 'string' || title.trim() === '') {
//         throw new Error('Название книги не может быть пустой строкой');
//     }

//     // Проверка, что автор не пустая строка
//     if (typeof author !== 'string' || author.trim() === '') {
//         throw new Error('Автор не может быть пустой строкой');
//     }

//     // Проверка, что количество страниц — положительное число
//     if (typeof pages !== 'number' || !Number.isInteger(pages) || pages <= 0) {
//         throw new Error('Количество страниц должно быть положительным целым числом');
//     }

//     // Присваиваем свойства объекту
//     this.title = title.trim();
//     this.author = author.trim();
//     this.pages = pages;
// }
//----------------------------------------------------------------------------------------