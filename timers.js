'use strict'

// 10
const strArr = process.argv.slice(2);

if (strArr.length !== 1) {
    console.error("Нужен 1 параметр.");
    process.exit(1);
}

const delay = Number.parseInt(strArr[0], 10);

if (Number.isNaN(delay)) {
    console.error('Количество секунд должно быть целым числом.');
    process.exit(1);
}

if (delay < 3 || delay > 10) {
    console.error('Количество секунд должно быть от 3 до 10.');
    process.exit(1);
}

const stopTime = Date.now() + 100 + delay * 1000;

const intervalId = setInterval(() => {
    const nowTime = Date.now();

    if (nowTime >= stopTime) {
        clearInterval(intervalId);
        console.log(`Время вышло!`);
        return;
    }

    let charEnd = 'а';
    const timer = Math.floor((stopTime - nowTime) /1000) + 1;
    if (timer > 4) charEnd = '';
    if (timer > 1 && timer < 5) charEnd = 'ы';

    console.log(`Осталось: ${timer} секунд${charEnd}`);
}, 1000);
//----------------------------------------------------------------------------
// 9
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// const [baseDelay, porog] = strArr.map(s => Number.parseInt(s, 10));

// if (!Number.isFinite(baseDelay) || !Number.isFinite(porog)) {
//     console.error('Параметры должны быть целыми числами.');
//     process.exit(1);
// }

// if (baseDelay < 500 || baseDelay > 3000) {
//     console.error('Задержка должна быть от 500 до 3000 миллисекунд.');
//     process.exit(1);
// }

// if (porog < 1 || porog > 100) {
//     console.error('Пороговое значение должно быть от 1 до 100.');
//     process.exit(1);
// }

// const random = Math.floor(Math.random() * 100) + 1;

// console.log(`Таймер запущен с задержкой ${baseDelay}мс, порог отмены: ${porog}`);
// const timeoutId = setTimeout(() => {
//     console.log(`Случайное число ${random} >= ${porog}, таймер выполнен`);
// }, baseDelay);

// if (random < porog) {
//     clearTimeout(timeoutId);
//     console.log(`Случайное число ${random} < ${porog}, таймер отменен`);
// }
//----------------------------------------------------------------------------
// 8
// const str = process.argv[2];

// const amountTimer = Number.parseInt(str, 10);

// if (Number.isNaN(amountTimer)) {
//     console.error('Количество таймеров для создания целое число.');
//     process.exit(1);
// }

// if (amountTimer < 2 || amountTimer > 4) {
//     console.error('Количество таймеров должно быть от 2 до 4.');
//     process.exit(1);
// }

// const timers = {};

// function genDelay() {
//     return Math.floor(Math.random() * (2000 - 800 + 1) + 800);
// };

// for (let i = 1; i <= amountTimer; i++) {
//     let delay = genDelay();

//     timers[i] = {
//         id: i,
//         delay: delay,
//         timeoutId: null,
//         status: 'created'
//     };

//     console.log(`Создан таймер ID: ${i} с задержкой ${delay}мс`)

//     timers[i].timeoutId = setTimeout(() => {
//         console.log(`Сработал таймер ID: ${i}`);
//         timers[i].status = 'triggered';
//     }, delay);
// }
//----------------------------------------------------------------------------
// 7
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// let [repeat, delay] = strArr.map(s => Number(s));

// if (!Number.isFinite(delay) || !Number.isFinite(repeat)) {
//     console.error('Параметры должны быть целыми числами.');
//     process.exit(1);
// }

// if (delay < 400 || delay > 1200) {
//     console.error('Базовая задержка должна быть от 400 до 1200 миллисекунд.');
//     process.exit(1);
// }

// if (repeat < 3 || repeat > 6) {
//     console.error('Количество таймеров должно быть от 3 до 6.');
//     process.exit(1);
// }

// if (!Number.isInteger(delay)) {
//     console.error('Базовая задержка должна быть целое число.');
//     process.exit(1);
// }
// if (!Number.isInteger(repeat)) {
//     console.error('Количество таймеров должно быть целое число.');
//     process.exit(1);
// }

// let counter = 0;

// function startTimeout(currentStage, totalStage, currentDelay) {
//     if (currentStage > totalStage) {
//         console.log(`Цепочка из ${totalStage} этапов завершена`);
//         return;
//     }

//     setTimeout(() => {
//         console.log(`Этап ${currentStage} завершен`);
//         startTimeout(currentStage + 1, totalStage, currentDelay - 100);
//     }, currentDelay);
// }

// startTimeout(1, repeat, delay);
//----------------------------------------------------------------------------
// 6
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// const [delay, mult] = strArr.map(s => Number(s));

// if (delay < 50 || delay > 500) {
//     console.error('Базовое число должно быть от 50 до 500.');
//     process.exit(1);
// }
// if (mult < 2 || mult > 8) {
//     console.error('Множитель должен быть от 2 до 8.');
//     process.exit(1);
// }

// if (!Number.isInteger(delay)) {
//     console.error('Базовое число должно быть целое число.');
//     process.exit(1);
// }
// if (!Number.isInteger(mult)) {
//     console.error('Базовое число должно быть целое число.');
//     process.exit(1);
// }

// const result = delay * mult;
// console.log(`Вычисленная задержка: ${result}мс`);

// setTimeout(() => {
//     console.log(`Таймер сработал с задержкой ${result}мс`);
// }, result);
//----------------------------------------------------------------------------
// 5
// const strArr = process.argv.slice(2);

// if (strArr.length !== 3) {
//     console.error("Нужно 3 параметра.");
//     process.exit(1);
// }

// const mcArr = strArr.map(s => Number(s));

// if(!mcArr.every(n => Number.isFinite(n))) {
//     console.error('Все задержки должны быть положительными числами.');
//     process.exit(1);
// }

// for (const mc of mcArr) {
//     if (mc < 200 || mc > 3000) {
//         console.error('Все задержки должны быть положительными числами от 200 до 3000 миллисекунд.');
//         process.exit(1);
//     }
// }

// for (const index in mcArr) {
//     setTimeout(() => {
//         console.log(`Таймер ${+index + 1} выполнен`);
//     }, mcArr[index]);
// }
//----------------------------------------------------------------------------
// 4
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// let [mc, maxRepeat] = strArr.map(s => Number(s));

// if (!Number.isFinite(maxRepeat) || !Number.isFinite(mc)) {
//     console.error('Параметры должны быть положительными числами.');
//     process.exit(1);
// }

// if (mc < 300 || mc > 1500) {
//     console.error('Интервал должен быть от 300 до 1500 миллисекунд.');
//     process.exit(1);
// }

// if (!Number.isInteger(maxRepeat)) {
//     console.error("Количество выполнений должно быть целым числом.");
//     process.exit(1);
// }

// if ( maxRepeat < 3 || maxRepeat > 8) {
//     console.error("Количество выполнений должно быть от 3 до 8.");
//     process.exit(1);
// }

// let counter = 0;
// const intervalId = setInterval(() => {
//     console.log(`Выполнение #${counter + 1}`);
//     counter++;
//     if (counter >= maxRepeat) {
//         clearInterval(intervalId);
//         console.log(`Интервал остановлен после ${counter} выполнений`);
//     }
// }, mc)
//----------------------------------------------------------------------------
// 3
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// let [count, mc] = strArr.map(s => Number(s));

// if (!Number.isFinite(count) || !Number.isFinite(mc)) {
//     console.error('Параметры должны быть положительными числами.');
//     process.exit(1);
// }

// if (mc < 500 || mc > 2000) {
//     console.error('Базовая задержка должна быть от 500 до 2000 миллисекунд.');
//     process.exit(1);
// }

// if ( count < 2 || count > 5) {
//     console.error("Количество таймеров должно быть от 2 до 5.");
//     process.exit(1);
// }

// const start = performance.now();

// for (let i = 0; i < count; i++) {
//     setTimeout(() => {
//         console.log(`Таймер ${i + 1}: ожидалось ${mc + i * 200}мс, выполнено за ${Math.round(performance.now() - start)}мс`);
//     }, mc + i * 200);
// }
//----------------------------------------------------------------------------
// 2
// const strArr = process.argv.slice(2);

// if (strArr.length !== 2) {
//     console.error("Нужно 2 параметра.");
//     process.exit(1);
// }

// let [message, mc] = strArr;
// mc = Number(mc);
// message = message.trim();

// if (Number.isNaN(mc)) {
//     console.error('Время до отмены должно быть положительным числом.');
//     process.exit(1);
// }

// if (mc < 50 || mc > 3000) {
//     console.error('Время до отмены должно быть положительным числом от 50 до 3000 миллисекунд.');
//     process.exit(1);
// }

// if (message.trim().length === 0) {
//     console.error("Сообщение не может быть пустым.");
//     process.exit(1);
// }

// const sendMessage = setTimeout(() => {
//     console.log(`${message}`);
// }, 2000);

// setTimeout (() => {
//     console.log('Таймер отменен');
//     clearTimeout(sendMessage);
// }, mc);
//----------------------------------------------------------------------------
// 1
// const strArr = process.argv.slice(2);

// if (strArr.length !== 3) {
//     console.error("Нужно 3 параметра.");
//     process.exit(1);
// }

// let [message, mc, userName] = strArr;
// mc = Number(mc);

// if (Number.isNaN(mc)) {
//     console.error('Задержка должна быть числом.');
//     process.exit(1);
// }

// if (mc < 100 || mc > 5000) {
//     console.error('Задержка указывается в диапазоне от 100 до 5000 мс.');
//     process.exit(1);
// }

// if (message.trim().length === 0) {
//     console.error("Сообщение не может быть пустым.");
//     process.exit(1);
// }

// if (userName.trim().length === 0) {
//     console.error("Имя пользователя не может быть пустым.");
//     process.exit(1);
// }

// setTimeout(() => {
//     console.log(`Привет, ${userName}! ${message}`);
// }, mc);