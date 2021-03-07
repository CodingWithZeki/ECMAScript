const myNumbers = [1,5,7,15,20,32,45];
/*for*/
/*
let mySquareNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
    mySquareNumbers.push(myNumbers[i]*myNumbers[i]);
}
*/

/*map*/
/*
let mySquareNumbers = myNumbers.map(element => element * element);


console.log(mySquareNumbers);
console.log(myNumbers);
*/

/*map with external function*/
/*
const squareNumbers = element => element * element;
let mySquareNumbers = myNumbers.map
    (squareNumbers);
console.log(mySquareNumbers);
console.log(myNumbers);
*/

/*map with external function with index*/
/*
const squareNumbers = (element,index) => {
    console.log("Element at the index " + index + " is" + element);
    return  element * element;
}
let mySquareNumbers = myNumbers.map
(squareNumbers);
console.log(mySquareNumbers);
console.log(myNumbers);
*/

/*map with direct call to Math.pow*/
/*
let mySquareNumbers = myNumbers.map(Math.pow);
console.log(mySquareNumbers);
console.log(myNumbers);
*/

/*Challange JSON*/
const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}'
];

/*for*/
/*
var posts = [];
for (let i = 0; i < postsJSON.length; i++) {
    posts.push(JSON.parse(postsJSON[i]));
}
console.log(posts);
console.log(posts[0].postId);
*/

/*map*/
/*
const posts = postsJSON.map(JSON.parse);
console.log(posts);
console.log(posts[0].postId);
*/

/*filter*/
/*
const filteredNumbers = myNumbers.filter(num => num > 10);
console.log(filteredNumbers);
*/

/*find*/
/*
const myArray = [10,[],{},"abc",true,15];

const result = myArray.find(element => {
    console.log(element);
    return typeof element === "boolean";
});
console.log(result);
*/

/*challange*/
const posts = [
    {"postId":1355,"commentsQuantity":5},
    {"postId":5131,"commentsQuantity":13},
    {"postId":6134,"commentsQuantity":2}
];

const findSinglePost = (postId,posts) => posts.find(post => post.postId === postId);
console.log(findSinglePost(6134,posts));

