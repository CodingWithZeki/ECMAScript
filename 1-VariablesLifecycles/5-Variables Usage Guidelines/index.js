/*1-Diğer Geliştiriciler Tarafından Okunabilir Olmalı*/
/*Hatalı Kullanım*/
/*
a = "Mike";
b = "London";

function test(x,y){
    d = "Hello" + x + " from " + y;
    return d;
}

var a,b,d;

test(a,b);

console.log(test(a,b));
*/
/*Doğru Kullanım*/
/*
personName = "Mike";
personCity = "London";

function greet(personName,personCity){
    var greetPerson = "Hello" + personName + " from " + personCity;
    return greetPerson;
}

console.log(greet(personName,personCity));
*/

/*2-Variables first value*/
/*
a = 10;
var a;
*/

/*3-use strict*/
"use strict";
/*
var b = 10;
function fn(){
    var d = b;
    return d;
}
fn();
*/

/*4-Yerel Kapsamda kullanılan değişkenleri diğer kapsamlarda kullanmamalıyız.*/
/*Expose*/
/*
var myArray;
var i;
function fn2() {
    myArray = [1,2,3];
    for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
*/

/*Dont Expose*/
function fn2(){
    var myArray = [1,2,3];
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

fn2();