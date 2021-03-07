/*
const sumNumbers = (a,b,...nums) => {
    console.log(a);
    console.log(b);
    console.log(nums);
};

sumNumbers(1,2,3,4);
*/

/*hatalı kullanım*/
/*
const sumNumbers = (...nums,a,b) => {
    console.log(a);
    console.log(b);
    console.log(nums);
};

sumNumbers(1,2,3,4);
*/

/*hatalı kullanım*/
/*
const sumNumbers = ...nums => {
    console.log(nums);
};
sumNumbers(1,2,3,4);
*/

/*reduce kullanımı*/
/*
const sumNumbers = (...nums) => {
    console.log(nums);
    return nums.reduce((sum,num) => sum + num,0);
};
console.log(sumNumbers(1,2,3,4));
*/

/*filter*/
/*
const sumNumbers = (...nums) => {
    console.log(nums);
    console.log(arguments); //referanceerror
    return nums
        .filter(num => typeof num === "number")
        .reduce((sum,num) => sum + num,0);
};
console.log(sumNumbers(1,2,3,4));
*/

/*Regular Functions*/
/*
function sumNumbers(...nums){
    console.log(nums); //Array
    console.log(arguments); //Object
    //arguments.sort(); uncaught TypeError: not a function
    return nums
        .filter(num => typeof num === "number")
        .reduce((sum,num) => sum + num,0);
};
console.log(sumNumbers(1,2,3,4));
*/
