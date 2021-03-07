/*Example 1*/
/*
const num = {
    value : 100,
    info: function (info){
        return this.value;
    }
};

console.log(num.info());
*/

/*Example 2*/
const anotherNum = {
    value: 5,
    info: function info() {
        console.log(this);
        return this.value;
    }
};

const newNum = {
    value: 17
};

console.log(anotherNum.info.call(newNum));
