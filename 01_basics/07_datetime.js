// dates

let mydate = new Date()
// console.log(mydate.toString()); //Thu Aug 14 2025 12:37:33 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //Thu Aug 14 2025
// console.log(mydate.toLocaleString());// 8/14/2025, 12:37:33 PM
// console.log(mydate.toLocaleDateString()); // 8/14/2025
// console.log(mydate.toLocaleTimeString());// 12:37:33 PM

// console.log(typeof mydate); // object


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})