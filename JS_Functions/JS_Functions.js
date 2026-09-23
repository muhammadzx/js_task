'use strict'

function smallest(array){
    let smallest=array[0];
    for(let i=1;i<array.length;i++){
        if(smallest>array[i])
            smallest=array[i]
    }

    return smallest;
}

console.log(smallest([6,3,12,4,9,5]))
// =======================================================
function Order(string) {
    return string.split("").sort().join("");
}

console.log(Order("hello"));
// =======================================================
function factorial(num){
    let factorial=1;
    for(let i=1;i<=num;i++){
        factorial*=i;
    }
    return factorial;
}
console.log(factorial(8));
// =======================================================
function oddOrEven(num){

    if (num % 2 === 0) {
        console.log("Even")
    } else {
       console.log("Odd")
    }

}
oddOrEven(9);
// =======================================================
function Up(num){
    let Up=0;
    for(let i=1;i<=num;i++){
        Up+=i;
    }
    return Up;
}
console.log(Up(8));
// =======================================================
function minMaxLengthAverage(array){
console.log("Min ",smallest(array));

 let max=array[0];
    for(let i=1;i<array.length;i++){
        if(max<array[i])
            max=array[i]
    }
console.log("Max ",max);

let sum=0;
for(let i=0;i<array.length;i++){
    sum+=array[i]
}
console.log("Average ",sum/array.length)

}
minMaxLengthAverage([6,3,12,4,9,5])
// =======================================================
function countWords(string){
    let words=string.split(" ")
    console.log(words.length)
}
countWords('hello from CodingAcademy!');
// =======================================================
function MultiplyByLength(array){
    for(let i=0;i<array.length;i++){
        array[i]=array[i]*array.length
    }
    return array;
}
console.log(MultiplyByLength([4,2,5]));
// =======================================================
function checkEnding(str1,str2){
    let y=0
for(let i=str1.length-str2.length;i<str1.length;i++){
    if(str1[i]===str2[y++])
        return true;
    else
        return false;
}

}
console.log(checkEnding("CodingSchoAc", "Ac"));
// =======================================================
function doubleChar(string){
    let doubleChar = [];
    let char
    for(let i = 0 ; i < string.length ; i++){
        
        doubleChar[i] =string[i] + string[i]
    
    }
    return doubleChar.join("")
}
console.log(doubleChar("Coding"));
// =======================================================
function findIndex(array, word) {
    return array.indexOf(word);
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));
