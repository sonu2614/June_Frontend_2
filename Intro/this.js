//this keyword
// dom intro

/*

    this keyword can be used anywhere.
    
    every line of code will be one of the possible
    local line/ global line

    this keyword always refers someaddress in the heap.

    1. when we use this keyword in global =>global Object

    2. when this keyword is used inside a function it will
    refers to the object reference who invoked it.


*/
//console.log(window); // window =>global variable

// console.log(this); //object 

// window.alert("Hello")

// this.alert("Hello")

// console.log(this.a);  //undefined
// var a=20;
// console.log(this.a);  //20

// var a=20;
// const aaa=30;
// console.log(window);

// var a=20;
// function aaa(){
//     console.log("Inside aaa");
// }
// console.log(window);

// alert("Hello")
/* In the global which are declared with var and function
keywords will become the part of the window object.
*/

// function callme(){
//     console.log("Inside callme");
// }
// // callme();
// // window.callme();
// this.callme();

// let Obj={ //Obj = #450
//     x:10,
//     y:20,
//     callme:function(){
//         //this = #450
//         console.log(this);
//     },
//     parent:{
//         a:1,
//         b:2,
//         callme2:function(){
//             //this = #300
//             console.log(this);
//         }
//     }
// }
// let f=Obj.parent.callme2
// // console.log(typeof f);
// f();

// Obj.callme();

// Obj.parent.callme2();



// function callme(){
//     console.log(this);
// }
// callme();


//window = #100
// let Obj = { //obj = #200
//     a:10,
//     parent:function(){
//         console.log(this); //obj = #200
        
//         let Obj2 = { //obj2 = #400
//             x:32,
//             callme : function(){
//                 //this =obj2 = #400
//                 console.log(this);
//             }
//         }
//         Obj2.callme();
//     }
// }
// Obj.parent();

// console.log(this===window);
// let obj = {
//     x:10,
//     a:function(){
//         //this =obj
//         console.log(this.x);  //obj.x = 10
//     },
//     b:() => {
//         //this = window
//         console.log(this.x);  //window
//     }
// }
// obj.a();
// obj.b();
// var x=100;


// console.log(this===window);
// let obj = {
//     x:10,
//     a:function(){
//         //this =obj
//         console.log(this.x);  //obj.x = 10
//     },
//     b:function(){
//         //this = obj
//         console.log(this);
//         let f = () => {
//             //this = obj
//             console.log(this);
//         }
//         f();
//         // console.log(this.x); //window x 
//     }    
// }

// obj.b();