class Character{
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    say() {
        console.log(`Имя: ${this.name}, язык: ${this.language}`);
    }
}

class Orc extends Character{
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    say() {
        console.log(`Orc ${this.name}, язык: ${this.language}`);
    }

    hit() {
        console.log(`${this.name} наносит удар оружием: ${this.weapon}!`);
    }
}

class Elf extends Character{
    constructor(race, name, language, spellType) {
        super(race, name, language);
        this.spellType = spellType;
    }

    say() {
        console.log(`Elf ${this.name}, язык: ${this.language}`);
    }

    spell() {
        console.log(`${this.name} создаёт заклинание типа: ${this.spellType}!`);        
    }
}


// Создаём персонажей
const орк = new Orc('Орк', 'Громмаш', 'Орочий', 'Топор');
const эльф = new Elf('Эльф', 'Линдорел', 'Синдарин', 'Стихийное');

// Тестируем методы
орк.say();           // Имя: Громмаш, язык: Орочий
орк.hit();               // Громмаш наносит удар оружием: Топор!

эльф.say();         // Имя: Линдорел, язык: Синдарин
эльф.spell(); // Линдорел создаёт заклинание типа: Стихийное!