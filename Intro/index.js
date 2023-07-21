//call by value and call by reference,
//closures, higher order function
/*
let a=20;
function callme(){
    let a=200;

    let child = () => {
        console.log(a);
    }
    //data type of child function
    return child;
}
let result=callme();
console.log(typeof result);
*/

/*
Variables are divided into two types:-
    i)  Primitive variables:
            (number, boolean, strings, undefined)

    ii) Non-primitive variables:
            (user defined variables, objects, function, arrays)

    actual value ,reference(address)  
    stack(lesser in size compared to HEAP), Heap      
   */

// let obj={
 //     key:{
//         key:{ 
//             ...primitive
//         }
//     }
// }

// let student={
//     name:'sonu',
//     age:25,
//     collage:'HIT'
// }

// let student2=student;
//     student2.name="Ronit";
//     console.log(student.name,student2.name)



// int x=20;
// System.out.println(x); //20

// int x=new Object();
// System.out.println(x); //372893@Obj

/*

call by value: calling a function by passing value.
call by reference: calling a function by passing the reference.


*/



// function callme(a,b){
//     a=50;
//     b[1]="abc";
// }
// let x=90, y=[1,2,3];
// callme(x,y);
// console.log(x,y);

/*
call by reference and call by value example:-

function x(x, y, z){
    // x=20, y=#120  z=#150
    x++; //x=21
    y[1]=100; //#120 =[90, 100]
    z=34;

}
let a=20, b =[90], c={name:'sonu'}
x(a,b,c);
console.log(a, b, c); //20 [90, 100] {name:'sonu'}

*/

/*
function parent(){
    let child =(a) =>{
        console.log(a+b) 
    }
    let a=20, b=100;
    return child;
}
let a=32, b=50;
let result=parent()
result(a+b); //182
*/


/* 
let a=10;
function parent(){
    let a=20;
    return function(){
        console.log(a);
    }
}
a=30;
let result=parent()
result();//20
*/

/*

let a=20;
let x=() =>{
    console.log(a);
}
function callme(func){
    let a=100;
    func();
}
a=24;
callme(x);
*/


//lexical parent of a context(functional context) 'X' means, the context Where 'X' is actually created.

//Every function will make a closure (links to variables) with it's lexical parent.