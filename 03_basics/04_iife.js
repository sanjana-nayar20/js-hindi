//Immediately Invoked Function Expressions (IIFE)

//named iife
(function chai(){
    console.log(`DB connected`);    
})();

//iife is used -> prevent global scope pollution

//unnamaed iife
((name) => {
    console.log(`DB connected 2`);
})()