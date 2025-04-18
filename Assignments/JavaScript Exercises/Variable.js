//Var is a global variable
var globalVar = "I'm global";
function show() {
  console.log(globalVar);
}


function test() {
    //Local variable localVar which can be accessed only in test() function
    let localVar = "I'm local";
    console.log(localVar);
}
  //here localVar is undefined
  console.log(localVar);

  
if (true) {
    const blockVar = "I'm block-scoped";
    console.log(blockVar); // Accessible
}
console.log(blockVar); // Output : not defined
  
