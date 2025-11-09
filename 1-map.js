'use strict'

const data = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const uniqueMap = new Map(data.map(item => [item.id, item]));
const uniqueArray = Array.from(uniqueMap.values());

console.log(uniqueArray);