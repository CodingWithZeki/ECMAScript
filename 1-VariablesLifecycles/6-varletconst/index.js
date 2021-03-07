/*Const Nerelerde Kullanılır*/
/*Example 1*/
/*
function multiplier(a){
    const MULT = 10;
    return a * MULT;
}

console.log(multiplier(3));
console.log(multiplier(5));
*/

/*Example 2 (Execute node index.js)*/
/*
const path = require("path");
console.log(path.resolve());
*/

/*Example 3*/
/*
const sum = function (a,b){
    return a + b;
};

sum = 5;

console.log(sum(2,5));
*/

/*Let Nerede Kullanılır*/

/*Example 1*/
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/

/*Examle 2*/
/*
function shortStr(str){
    const MAX_LENGTH = 15;
    if (str.length > MAX_LENGTH){
        let newStr;
        newStr = str.substring(0,MAX_LENGTH) + "...";
        console.log(newStr);
    }else {
        /!*console.log(newStr); not defined*!/
        console.log(str);
    }
}

shortStr("Long string example");
shortStr("Short");
*/

/*Var Nerede Kullanılır*/

/*Example 1*/
var person = {
    name:"Bob",
    age: 25
}

function updatePerson(person) {
    var updatedPerson = {};
    if (person.name){
        updatedPerson.name = person.name;
    }
    updatedPerson.updatedAt = new Date();
    return updatedPerson;
}

console.log(updatePerson(person));






