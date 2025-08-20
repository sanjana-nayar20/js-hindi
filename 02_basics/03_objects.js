// singleton
const mysym = Symbol("keyl")

//  object literals 
const JsUser = {
    name:"sanjana",
    [mysym]:"keyl",
    age:22,
    location:"jaipur",
    email:"sanj@com",
    isLoggedIn:false,
    lastloginday:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])//key is treated as string so use quotes.
console.log(JsUser[mysym]);

JsUser.email = "ani@yahoo.com"
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`hello JS user ${this.name}`);
}
console.log(JsUser.greeting());