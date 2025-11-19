'use strict'

function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.говорить = function() {
    console.log(`Имя: ${this.name}, язык: ${this.language}`);
};

function Orc(race, name, language, weapon) {
    // Вызываем конструктор родителя
    Character.call(this, race, name, language);
    this.weapon = weapon;
}

// Настраиваем прототип: Orc наследует от Character
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

// Добавляем методы в прототип Orc
Orc.prototype.удар = function() {
    console.log(`${this.name} наносит удар оружием: ${this.weapon}!`);
};

Orc.prototype.заклинание = function() {
    console.log(`${this.name} пытается применить заклинание (но орки плохо колдуют)...`);
};

Orc.prototype.создатьЗаклинание = function() {
    console.log(`${this.name} пытается создать заклинание, но получается лишь громовой рык.`);
};

function Elf(race, name, language, spellType) {
    // Вызываем конструктор родителя
    Character.call(this, race, name, language);
    this.spellType = spellType;
}

// Настраиваем прототип: Elf наследует от Character
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

// Добавляем метод в прототип Elf
Elf.prototype.создатьЗаклинание = function() {
    console.log(`${this.name} создаёт заклинание типа: ${this.spellType}!`);
};
