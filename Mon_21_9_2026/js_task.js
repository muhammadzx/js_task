'use strict'
console.log(typeof (100))//output Number
console.log(typeof (73.9))// Number
console.log(typeof (NaN))//Number
console.log(typeof ("Water"))//strinfg
console.log(typeof (false))//boolean
console.log(typeof (9 != 11))//boolean
console.log("Orang" + "e")//Orange
console.log("Orange" - "s")//oranges
console.log("4" + "8")//48
console.log("4" - "8")//-4
console.log("name" + 3)//name3
console.log("name" - 3)//NaN
console.log(82 * "word")//NaN
console.log("hello" + 1)//hello1
console.log(1 + "hello")//1hello
console.log(1 + true)//2
console.log("hello" + true)//hellotrue
console.log(typeof (Infinity))//number
console.log(1 == '1')//true
console.log(1 === '1')//false

// ===========================================================
let cash = 1000;
let current_liabilities = 500;
console.log(cash / current_liabilities)
// ===========================================================
let revenues = 1000
let expenses = 500
console.log(expenses % revenues)
// ===========================================================
let liabilities = 1000
let equity = 500
console.log(liabilities + equity)
// ===========================================================
let profit = 1000
let sales = 500
console.log(profit * sales)
// ===========================================================
let number1 = 7
let number2 = 9
let number3 = 2
console.log((number1 + number2 + number3) / 3)
// ===========================================================
let price = 150
let discount = 0.3
console.log(price - (price * discount))
// ===========================================================
let age = 20;
if (age > 18 & age < 30) {
    console.log(true)
}
// ===========================================================
number1 = 2
number2 = 3
console.log(number1 ** number2)
// ===========================================================
number1 = 10
number2 = 4
console.log(number1 % number2)
// ===========================================================
let string = "Welcome to Orange";
console.log(string.toUpperCase())
console.log(string.substring(8, 10).toUpperCase())
console.log(string.replace("Welcome to", "Hello from"))
console.log(string.toLowerCase())
console.log(string.length)
console.log(string + " Jordan")
// =====================================================s======
let text = "cactus";
let firstLetter = text[0];
let rest = text.slice(1);
rest = rest.replaceAll(firstLetter, "*");
text = firstLetter + rest;
console.log(text);
// ===========================================================
let array = ["Coding", "Academy", "By", "Orange"]
array.push("jordan")
console.log(array);//1
console.log(array.slice(0, 2));//2
array.unshift("Welcome", "To");//3
console.log(array);//4
console.log(array.slice(1, 4))//5
console.log(array.join(" "))//6
console.log(array.slice(2, 6))//7
console.log(array.filter(item => item === "Coding" || item === "Orange"))//8
// ===========================================================
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var vegetables_remove_last = vegetables
vegetables_remove_last.pop()
console.log(vegetables_remove_last)//1

let fruit_remove1 = fruit
fruit_remove1.shift()
console.log(fruit_remove1)//2

let index = fruit.indexOf("orange")
console.log(index)//3

fruit.push(index)
console.log(fruit)//4

console.log(vegetables.length)//5

vegetables.push(vegetables.length)
console.log(vegetables)//6

let food = fruit.concat(vegetables)
console.log(food)//7

food.splice(4, 2)
console.log(food)//8

console.log(food.reverse())//9

console.log(food.toString())//10

// ===========================================================
let birthYear = 2000;
let currentYear = new Date().getFullYear();
age = currentYear - birthYear
if (age > 30) {
    console.log("You are not eligible. You may join other programs.")
} else if (age >= 18 & age <= 30) {
    console.log("You are eligible. Start your application.")
} else if (age < 18) {
    console.log("You may join the kids' program.")
} else if (age > 60) {
    console.log("You may join the seniors’ program.")
}

// ===========================================================
function switchCase(text) {
    let text1 = " ";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[i].toUpperCase()) {
            text1 += text[i].toLowerCase();
        } else {
            text1 += text[i].toUpperCase()
        }
    }
    return text1;
}
console.log(switchCase("OrAnGe"))
// ===========================================================
function camelCase(text) {
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}
console.log(camelCase("Coding Academy by Orange"));

// ===========================================================

function removeElement(array, element) {
    let index = array.indexOf(element);
    array.splice(index, 1);
    return array;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));
// ===========================================================
function oddOrEven(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(8));
// ===========================================================
function isNumber(value) {
    return typeof value === "number";
}
console.log(isNumber(10));
// ===========================================================
function largestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(largestNumber(10, 7));
// ===========================================================
function triangleType(a, b, c) {
    if (a == b && b == c) {
        return "Equilateral";
    } else if (a == b || a == c || b == c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
console.log(triangleType(5, 5, 5));

// ===========================================================
function inRange(number, min, max) {
    return number >= min && number <= max;
}
console.log(inRange(15, 10, 20));

// ===========================================================
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2024));


// ===========================================================

for (let i = 2; i <= 50; i += 2) {
    let y = 0
    while (y < 2) {
        console.log(i);
        y++;
    }

}


// ===========================================================
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
    console.log(i);

}

// ===========================================================
for (let i = 2; i <= 50; i += 2) {//even
    console.log(i);


}
for (let i = 1; i <= 50; i += 2) {
    console.log(i);//odd


}
// ===========================================================
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// ===========================================================
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
console.log(fizzBuzz(1))
console.log(fizzBuzz(15))
// ===========================================================
function fizzBuzz1(number) {
    if (number > 100) {
        return;
    }

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }

    fizzBuzz1(number + 1);
}

fizzBuzz1(1);
// ===========================================================
function banknotes(amount, notes) {
    let result = [];

    for (let note of notes) {
        while (amount >= note) {
            result.push(note);
            amount -= note;
        }
    }

    return result;
}

console.log(banknotes(57, [25, 10, 5, 1]));
// ===========================================================
function countCharacter(text, character) {
    let count = 0;

    text = text.toLowerCase();
    character = character.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i] === character) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));
// ===========================================================
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// ===========================================================
let text2 = "CodingAcademy";
let array2 = [7, 500, "KH404", "black", 36];
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}
// ===========================================================
for (let i = text2.length - 1; i >= 0; i--) {
    console.log(text2[i]);
}
// ===========================================================

let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }
}

console.log(evens);
console.log(odds);
// ===========================================================
// let proteins = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
// let grains = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
// let vegetables1 = ["peas", "green beans", "kale", "edamame", "broccoli", "asparagus"];
// let beverages = ["juice", "milk", "water", "soy milk", "soda", "tea"];
// let desserts = ["apple", "banana", "more kale", "ice cream", "chocolate", "kiwi"];
// let numberOfMeals = Number(prompt("How many meals do you want?"));
// let meals = [];
// for (let i = 0; i < numberOfMeals; i++) {
//     let meal = [
//         proteins[i % proteins.length],
//         grains[i % grains.length],
//         vegetables1[i % vegetables1.length],
//         beverages[i % beverages.length],
//         desserts[i % desserts.length]
//     ];
//     meals.push(meal);
// }
// console.log(meals);
// ===========================================================

function getProperties(object) {
    return Object.keys(object);
}
let person = {
    name: "Mohammad",
    age: 22,
    city: "Madaba"
};

console.log(getProperties(person));
// ===========================================================
function getPropertiesLength(object) {
    return Object.keys(object).length;
}


console.log(getPropertiesLength(person));
// ===========================================================
function combineObjects(object1, object2) {
    return Object.assign({}, object1, object2);
}

let address = {
    city: "Amman",
    country: "Jordan"
};

let result = combineObjects(person, address);

console.log(result);
// ===========================================================
function uppercaseValues(object) {
    let result = {};

    for (let i in object) {
        result[i] = String(object[i]).toUpperCase();
    }

    return result;
}
console.log(uppercaseValues(person));
// ===========================================================
function removeNullValues(object) {
    let result = {};

    for (let property in object) {
        if (object[property] != null) {
            result[property] = object[property];
        }
    }

    return result;
}
let data = {
    name: "Mohammad",
    age: null,
    city: "Amman",
    phone: null
};

console.log(removeNullValues(data));
// ===========================================================
function sortProperties(object) {
    return Object.keys(object).sort();
}

console.log(sortProperties(person));
// ===========================================================
