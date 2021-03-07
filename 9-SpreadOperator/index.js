/*Example 1*/
/*
const myGreeting = (name,city,age) => {
    return `Hello from ${name} who is ${age} years old and lives in ${city}`;
};

const myPerson = ["Alice","Boston",20];
console.log(myGreeting(...myPerson));

const anotherPerson = ["New York",25];
console.log(myGreeting(...anotherPerson));
*/

/*Examle 2*/
/*
const a = [1,2,3];
const b = [4,5];
const c = a.concat(b).concat(6);
console.log(c);

const d = [...a,...b,6];
console.log(d);
*/

/*Example 3*/
/*
const dateInfo = [2025,5,10];
const date = new Date(...dateInfo);
console.log(date);
*/

/*Example 4*/
/*
const myArray = ["a",5,[],true];
const newArray = [...myArray];
newArray.push(10);
newArray[2].push(7);

console.log(myArray);
*/

/*Example 5*/
/*
const myObject = {a:10,b:"c"};
const copiedObject = {...myObject};
copiedObject.a = 20;
console.log(copiedObject);
*/

const myObject = {a:10,b:"c",d:[1,2]};
const copiedObject = {...myObject};
copiedObject.a = 20;
copiedObject.d.pop();
console.log(copiedObject);




