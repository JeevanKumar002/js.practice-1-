// Global scope
let global = "this is global scope";
console.log(global);      

// function scope
function testFunction() {
    let functionVariable = "function";
    console.log(global);      // Can access global
    console.log(functionVariable);    // Can access its own
}
testFunction();

// Block scope or lexical scope or local scope 
function block() {
    let blockVariable = "this is restricted for here only";
    const alsoInBlock = "this too";
    var notBlocked = "this can be called out from anywhere";
    console.log(blockVariable);  // Works 
}
block();

console.log(blockVariable);  // error
console.log(alsoInBlock); // not gonna work
console.log(notBlocked); // Works! (not works)