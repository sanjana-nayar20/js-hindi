// Primitive

// 7 types : String, Number, Boolean , null, undefined, symbol,BigInt



// Reference (Non primitive)

//Array , Objects, Functions

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Memory :
// 2 types
// stack used in (Primitive)
// stack - changes are made in the copy

let myytname = "sanjana"
let an_name = myytname
an_name = "chai"
console.log(an_name);

// Heap used in (Non -Primitive)
// Heap - we will have reference to changes.

let userone = {
    email : "san@gmail.com",
    upi: "san@ybl"
}
let usertwo = userone

usertwo.email = "sanj@yahoo.com"

console.log(usertwo.email);
console.log(userone.email);

