//arrays - object , enables storing a collection of multiple items under a single variable,name n 
// has members for performing common array operations.

const myArr = [0,1,2,3,4,5]

// shallow copy , deep copy

const myHeros = ["shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(18));

const newArr = myArr.join()
// join - changes data type into string.
// console.log(myArr);
// console.log(newArr);

// slice - original data is not changed
// splice - orginal data is manipulated

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);


