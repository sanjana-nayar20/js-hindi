const name = "sanjana"
const repocount = 50

// console.log(name + repocount + "value" );

// console.log(`My name is ${name} n rep cnt is ${repocount}`);

const gameName = new String('sanj-ana-com')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// substring
const newString = gameName.substring(0,4)
console.log(newString);

// slice
const anotherString = gameName.slice(-8,2)
console.log(anotherString);

// trim
const newStringOne = "   sanjana  "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://sanjana.com/sanjan%20nayar"
console.log(url.replace('%20','-'));

// includes
console.log(url.includes('san'));

// split
console.log(gameName.split('-'));
