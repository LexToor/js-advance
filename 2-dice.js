'use strict'

const diceArr = new Map([
    ['d4', 4],
    ['d6', 6],
    ['d8', 8],
    ['d10', 10],
    ['d12', 12],
    ['d16', 16],
    ['d20', 20]    
]);

const dice = str => {
    if (!diceArr.has(str)) return null;
    return Math.floor(Math.random() * diceArr.get(str) + 1);
};
