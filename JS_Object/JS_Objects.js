'use strict'
let object = { name: "Adam", age: 25, gender: "male" };
console.log(object)
// =======================================================
let person = {
name: "Adam",
age: 25
};
person.gender = "male";
console.log(person);
// =======================================================
console.log(person.name);
// =======================================================
 let array=[1, 2, 3, 4, 5];
array.forEach(function(array) {
    console.log(array);
});
// =======================================================
 array=["banana", "cherry", "apple"];
console.log(array.sort());
// =======================================================
 array= ["apple", "banana", "cherry"];
console.log(array.reverse());
// =======================================================
 let array1=[1, 2, 3],array2 =[4, 5, 6];
 console.log(array1.concat(array2));
// =======================================================
array=[1, 2, 3, 4, 5, 6]
 array=array.slice(2);
 array=array.slice(4);
 console.log(array);
// =======================================================
  let numbers = [1, 2, 3, 4, 5, 6];
  let result = numbers.slice(0, 2).concat(numbers.slice(4));
console.log(result);
// =======================================================

numbers = [1, 2, 3, 4, 5];

numbers.splice(3, 1);

console.log(numbers);
// =======================================================

 numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(2));
// =======================================================
 numbers = [1, 2, 3, 4, 5];
console.log(numbers.join());
// =======================================================
 numbers = "1,2,3,4,5";
console.log(numbers.split(","));
// =======================================================
 numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
// =======================================================
 numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}
// =======================================================
 numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers));
// =======================================================
