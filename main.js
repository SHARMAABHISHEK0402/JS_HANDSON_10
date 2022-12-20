// Create one function with zero parameter having a console statement
function Print()
{
    console.log("JavaScript");
}
Print();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let add = a + b;
    console.log(add);
 }
 sum(3,4);

//  Create one arrow function

const Add = (a,b) =>{
    let result = a+b;
    console.log(result);
}
Add(6,8);

// Write a function that accepts parameter n and returns factorial of n.
function fact(n){
    if (n===0)
    {
        return 1;
    }
        return (n * fact (n - 1));
}
console.log(fact(5));



//Print oUtput

var x =21;
var girl = function()
{
    console.log(x);
    var x = 20;
}
girl();
//OUTPUT - undefined

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//OUTPUT - 21

var x = 21;
a();
b();
console.log(a);
a = function(){
    x = 20;
    console.log(x);
};
b = function(){
    x = 40;
    console.log(x);
};
//OUTPUT - index.js:87
//Uncaught ReferenceError: a is not defined at index.js:87:1