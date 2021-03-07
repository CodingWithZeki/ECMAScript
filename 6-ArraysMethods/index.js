/*
const [name,year] = ['john',26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName,lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a,lastName:b} = obj;
console.log(a);
console.log(b);

const [age2,retirement] =
calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/*Destructring Assignment*/
let a,b;
[a,b] = [100,200];
/*Rest Pattern*/
[a,b,c, ...rest] = [100,200,300,400,500];
console.log(rest);

({a,b} = {a:100,b:200,c:300,d:400,e:500});
({a,b,...rest} = {a:100,b:200,c:300,d:400,e:500});
console.log(a,b);
console.log(rest);

/*Array Destructring*/
/*
const people = ['John','Beth','Mike'];
const [person1,person2,person3] = people;
console.log(person1,person2,person3);
*/

/*Parse Array returned from function*/
/*
function getPeople() {
    return ['John','Beth','Mike'];
}

let person1,person2,person3;
[person1,person2,person3] =getPeople();
console.log(person1,person2,person3);
*/

/*Object Destructring*/
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function (){
        console.log('Hello');
    }
}

/*ES6 Destructring*/
const {name,age,city,sayHello} = person;
console.log(name,age,city);
sayHello();
