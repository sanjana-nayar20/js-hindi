function myFunc(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
    console.log("a");
}
myFunc()

// function addTwoNum(num1,num2){

//     console.log(num1+num2); 
// }
// addTwoNum(2,2)

function addTwoNum(num1,num2){
    return num1+num2;
    
}
const result = addTwoNum(9,1)
// console.log("result",result);

function logIn(username) {
    return `${username} just logged in`
}
// console.log(logIn("sanjana"));

function calculateCartPrice(val1,va2,...num1) {
    return num1
    
}
console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username:"sanj",
    price:444
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} n price is ${anyobject.price}`);
}
handleObject(user) 
const myNewArray = [10,20,30,300]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

