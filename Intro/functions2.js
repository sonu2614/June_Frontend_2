// function callme(){
//     console.log("Inside function");
// }
// callme()
// callme()

// let callme = function(){
//     console.log("Inside function");
// }
// callme();

// let callme = () =>{
//     console.log("Inside function");
// }
// callme();

// let callme = (a,b) =>{
//     console.log(a+b)
//     console.log("inside function");
// }
// callme(10,20)

// let callme=(a,b) => {
//     return (a+b);
// }
// console.log(callme(10,20));

// let callme=(a,b) => a+b;
// console.log(callme(30,40));

// let callme = (a) => a*2;
// console.log(callme(20));


// let func =a => console.log(a*2)
// func(10)

// let func =a => console.log(a*2)
// console.log(func(10));

// let result=console.log();
// console.log(result);

// let func =a => {
//     //a=10
//     let r=console.log(2*a); //2*10=20
//     return r;
// }
// console.log(func(10));
//-------------JS execution , scope chain------------------

// function a(){
//     return 10/2;
// }

// function b(){
//     return 2*a();
// }
// console.log(b()); //10

//input :array ,number to be searched, write a function which returns boolean value

// function b(){
//     return console.log("asdfghjkl"); //asdfghjkl
// }
// console.log(b()); //undefined

// function b(){
//     return 2*console.log( "asdfghjkl"); //2*undefined=NaN
// }
// console.log(b()); //undefined

// let result=typeof (b)  //function
// console.log(result);

//var ,const

//var, function

// function a(){}

// function a(){}

// 10;
// "sonu";

// let x=function(){
//     console.log("asdfghjkl");
// }

// let a=20;
// let b=15;
// test=function (){
//     let b=10;
//     console.log(a+b);
// }
// b=30;
// test();

/*
TDZ => Temporal dead zone

Every container that gets created in the call stack goes through 2 Phase
1) Creation Phase
2)Execution Phase

Creation Phase :
        During the creation phase variables will get hositing.
        variables will be inialised with undefined values during creation phase 
            that is what we call as hoisting.

Execution Phase : 
        The codes gets executed squentially

Hoisting : 
        Variables which are decleared with let/const keywords will be hoisted with undefined 
            values and kept inside the temporal dead zone(TDZ)

//JS engine(v8)-->nodejs,Spider Monkey==> CallStack
//phase 1=>creation phase-->source code converted into bytecode
// phase 2=>execution phase-->converted bytecode will interpreted into machine code

// scanning -->byte_code-->interpreted --> machine_code

*/

//let , cont, var, function.=>four ways to declare variable
// var x=90;
// console.log(x);
// const y ="abc";
// let z=true;
// function test(){
//     var a=90;
//     let c=100;
//     console.log(a+c+x);
//     console.log(x+y+z);
//     console.log("test function");
// }
// test();
// console.log(x);
// var x=20;
// console.log(x);


// when you touch a variable which is inside the TDZ is will throw error -> Cannot access 'x' before initialization
// console.log(x);
// let x=20;
// console.log(x);

// console.log(x);
// const x=20;
// console.log(x);

// console.log(x);
// function x(){
//     console.log("Inside Function");
// }
// console.log(x);

// let x;
// function callme(){
//     console.log(y);
//     var y=100;
//     let z=200;
//     console.log(y+x+z);
// };
// callme();



// function callme(){
//     console.log(y);  //undefined
//     var y=100;
//     let z=200;
//     console.log(y+x+z); // Cannot access 'x' before initialization 
// };
// callme();
// let x;

// let a=10;
// let x=70;
// function parent(a,b){
//     let y=90;
//     function child(){
//         console.log(a+b+x,y);
//         var y;
//     }
//     child();
// }
// parent();