const user = {
    username : "sanjana",
    price :999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
//  +++++++++++++++  arrow function    +++++++++++++++++++
//explicit - return is used
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

//implicit function
const addTwoo = (num1,num2) => num1 + num2

console.log(addTwoo(3,4))

