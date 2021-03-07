// function declaration
function fn(a,b){
    return a + b;
}

fn(2,3);

/*anonymous function expression*/
/*Farkı burada function ismi yoktur*/


/*Assignment to the variable*/
const fn1 = function (a,b){
    return a + b;
};

fn1(2,3);

/*IIFE*/
(function(a,b) {
    console.log("IIFE is executed");
    return a+b
})(2,3);

/*callback function*/
setTimeout(function (a,b){
    console.log("Callback function is executed")
    return a + b;
},1000)
