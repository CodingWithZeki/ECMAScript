// What is const?
// const - variable that can't be reassigned

const myConst = 10;
myConst = 20;
/*Hata verecektir! Eğer ilk değeri vermezsek Initial First Value Hatası Döner*/

/*Array Kısmında Durum Farklıdır*/
const myArray = [];
myArray.push("newElement");
myArray.push("anotherElement");

const anotherConst = {};
anotherConst.a = 10;
/*anotherConst = {
    b: 20
};*/

const primitiveTypeConst = null;
primitiveTypeConst = undefined;
/*Primitive Tiplerde Hata Alınacaktır!*/

/*Global ve function scope tanımlanabilir fakat döngü ve block scope tanımlanamaz*/
// Scope
const a = 10;
console.log(a);

function fn(){
    const b = true;
    console.log(b);
}

{
    const b1 = 4;
}

for (const i = 0; i < 5; i++) {
    console.log(i);
}

// Reassignment
const c = 1;
c = 2;

/*Const ile reassigmnet yapılamaz*/
function fn(){
    c = 3;
}

/*Redeclaration*/
const d = true;
const d = false;
console.log(d);

/*Farklı Scope'larda reassigment const tanımlanabilinir.*/
function fn1(){
    const d = "abc";
    console.log(d);
}

console.log(d);

