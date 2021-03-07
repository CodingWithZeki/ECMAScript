/*// Scope
let a = 10;
console.log(a);

function fn() {
    let b = true;
    console.log(b);
}

fn();

// console.log(b);

{
    let b1 = 1;
}

console.log(b1);

for(let j=0; j<5; j++){
    console.log(j);
}*/
/*Let ve Const Farkı Let Block Scope'da Geçerlidir.*/

/*// Reassignment
let c = 1;
c = 2;

function fn2() {
    c = 3;
}

fn2();*/

// Redeclaration
let d = false;
let d = true;

function fn3() {
    let d = 5;
}

fn3();
/*Aynı Scope da Let İle Redeclaration Yapılamaz!!!*/

{
    let d = "abc";
    console.log(d);
}

console.log(d);
/*Console yazdırdığımızda ise bir önceki değer olan false alacaktır.*/

