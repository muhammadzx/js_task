'use strict'
let i=1
while(i<=10){
    console.log(i)
    i++
}
// =======================================================
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// =======================================================
for (let i = 1; i <= 10; i++) {
    if(i%2==0)
    console.log(i);
}
// =======================================================
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);
// =======================================================
let numbers = [10, 25, 7, 40, 15];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(largest);
// =======================================================
numbers = [10, 20, 30, 40, 50];

sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);
// =======================================================
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(factorial);
// =======================================================
 number = 10;
let first = 0;
let second = 1;

for (let i = 0; first <= number; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}
// =======================================================
number = 20;

for (let i = 2; i <= number; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}
// =======================================================
array =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(let i=0;i<array.length;i++)
    for(let y=0;y<array[i].length;y++)
        console.log(array[i][y])
// =======================================================
array =[1, 2, 3, 4, 5];
for(let i=array.length-1;i>=0;i--)
    console.log(array[i])
// =======================================================
array =[1, 2, 3, 4, 5];
for(let i=0;i<array.length;i+=2)
    console.log(array[i])
// =======================================================
array =[1, 2, 1, 3, 2, 1];
let cont=0;
let num=1
for(let i=0;i<array.length;i++)
    if(array[i]===num)
        cont++
    console.log(array[cont])
// =======================================================
const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((hero, index) => {
    return {
        hero: hero.name,
        power: hero.power,
        id: index
    };
});

console.log(newHeros);
// =======================================================
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function filterWords(inputWords) {
    return inputWords.filter(function(word) {
        return word.length >= 7;
    });
}
console.log(filterWords(inputWords));
// =======================================================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numbers.reduce((sum, number) => {
    if (number % 5 === 0) {
        return sum + number ** 2;
    }

    return sum;
}, 0);

console.log(sumSquaredDivisibleBy5);

