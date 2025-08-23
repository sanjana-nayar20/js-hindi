let a = 200

if (true) {
    let a = 10
    const b =20
    // var c = 30
    // console.log("inner :",a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "sanjana"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); //error - calling outside loop
    two()
}
// one()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5));
function addone(num) {
    return num + 1
}

//hoisting 
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5));
 //it should be below