/*Example 1*/
/*
const sum = (a,b) => a + b;
console.log(sum(1,2));
console.log(sum(5,7));
*/

/*Example 2*/
/*
const post = {
    title: "Sample title",
    comments: 10,
    shared: true,
    published: true,
    postId: 5134
}
*/

/*
const processedPost = (post) => {
    return{
        title: post.title,
        comments: post.comments,
        popular: post.comments > 5 ? true : false
    }
};
*/

/*return yazamadan nasıl yaparım?*/
/*tek prametre varsa paranteze gerek yoktur.*/
/*
const processedPost = post => ({
        title: post.title,
        comments: post.comments,
        popular: post.comments > 5 ? true : false
});


console.log(processedPost(post));
*/

/*Example 3*/
(() => {
    this.greet = () => "Hey. What's Up?";
    return this;
})();

