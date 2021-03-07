/*
const myArray = [1,true,"abc"];

for (let i = 1; i < myArray.length; i++){
    console.log(myArray[i]);
}

myArray.forEach(element => console.log(element));
*/

const arrayInfo = (element,index) => element +  "London is located at the index " + index + " in the myCities array";

/*for*/
const myCities = ["İnegöl","Bursa"]
for (let i = 0; i < myCities.length; i++) {
    console.log(arrayInfo(myCities[i],i))
}

/*foreach*/
myCities.forEach((element,index) => console.log(arrayInfo(element,index)));