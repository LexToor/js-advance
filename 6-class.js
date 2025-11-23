class Car {
    #mark;
    #model;
    #mileage;
    constructor(mark, model, mileage) {
        if(typeof mark !== 'string' || mark.trim() === '') {
            throw new Error('Марка не может быть пустой строкой.');
        }
        if(typeof model !== 'string' || model.trim() === '') {
            throw new Error('Модель не может быть пустой строкой.');
        }
        if(typeof mileage !== 'number' || !Number.isInteger(mileage) || mileage <= 0) {
            throw new Error('Пробег должен быть целым положительным числом.');
        }

        this.#mark = mark.trim();
        this.#model = model.trim();
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(value) {
        if(typeof value !== 'number' || !Number.isInteger(value) || value < this.#mileage) {
            throw new Error('Пробег должен быть целым положительным числом, большим текущего значения пробега.');
        }

        this.#mileage = value;
    }

    info() {
        return `Car {mark: ${this.#mark}, model: ${this.#model}, mileage: ${this.#mileage}.}`;
    }

}
