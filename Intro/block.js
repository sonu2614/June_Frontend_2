/*
1. Block and Context scope.
2. String method
3. Destructuring
4. Higher order functions
5. Assignment
*/

// Block and Context scope
/*
function callme(name){
    console.log(name);
}
let x={name:'sonu'}
callme(x.name)
*/

// function callme(list){
//     //list=#300
//     console.log(list);
//     list[0]=100;
//     console.log(list); 
// }
// let x={friends:[3, 4, 5]}
// /*
// x:#200 ={friends:#300}
// #300 = {3,4,5}
// */
// callme(x.friends)
// console.log(x.friends);

/*

const final

1. let and const declared variables are block scoped
    if(){}
    else{}
    for(){}
    while(){}
    do()while{}

2. var declared variables are context scoped(not block scoped)

    function(){} => this is not a block a context
*/

// const a=20;
// a=20;  //Uncaught TypeError: Assignment to constant variable

// let x=200;
// if(true){
//     let a=20;
//     const b=30;
//     console.log(a+b);
//     // var c=200;
//     // function x(){
//     //     console.log("inside x");
//     // }
// }
// // console.log(a);
// // //error (not defined)

// console.log(a,y);
// if(true){
//     var a=20;
//     if(false){
//         let x=12;
//         var y=120;
//     }
// }
// console.log(a,y);

// function callme(){
//     console.log(x);  //undefined
//     let a=20;
//     if(true){
//         var x=200;
//         let y=100;
//         console.log(a+b+x);//245
//     }
// }
// let b=25;
// callme();
// console.log(x);  //Uncaught ReferenceError: x is not defined

//---------------- STRING------------------

let str="sonu";
//strings in js  are follows zero based indexing
//strings in js are immutable

// console.log(str[0])

// str[0]="x";
// console.log(str);

// console.log(str.charAt(100)==='');

// //n(ascii code)=110
// console.log(str.charCodeAt(2));  //110


//[start, end]
// let sliceString=str.slice(1,3);
// console.log(sliceString);  //on

//splice

// let str1="abc@mn@o@hijk";
// //["abc", "mn", "o", "hijk"]
// let fragments=str1.split("@")
// console.log(fragments);

// let sentence="Welcome to the Full Stack Web Development Course at AccioJob"
// let word=sentence.split(" ")
// console.log(word);
// console.log(word.length);

// //trimmed
// let str3="  abc  def     ghi    "
// let trimmedString = str3.trim();
// console.log(trimmedString);

// console.log('c'.charCodeAt(0)-'a'.charCodeAt(0));


//--------------- Destructuring ----------------
// let a=20, b=30, c=40;
//[](Array) {}(object)

// let [a, b, c]=[20, 30, 40];
// console.log(a, b, c);

// let [x,y]=["sonu", () => {
//     console.log("inside function");
// }]

// console.log(typeof x, x);//string sonu

// console.log(typeof y, y);
// /*
// function () => {
//     console.log("inside function");
// }
// */

/*
// let user={name:'sonu', age:22}

// let name=user.name, age=user.age;
// console.log(name,age);

let {name, age}={name:'sonu', age:22}
console.log(name,age);
*/
// let {name, age, x}={name:'sonu', age:22, x:undefined}
// console.log(name,age, x); // -> sonu 22 undefined

// let {name, age, x}={name:'sonu', age:22,}
// console.log(name,age, x);// -> sonu 22 undefined


// let {name:fullname, age, x}={name:'sonu', age:22}
// console.log(name,fullname,age, x) //-> sonu 22 undefined

// let {name:fullname, age:MyAge, x}={name:'sonu', age:22}
// console.log(name,fullname,MyAge, x) //-> sonu 22 undefined

// let x=20;
// let y=10;
// console.log({x,y}); //{x: 20, y: 10}

//----------------Spread Operator-----------------

// let a1=[3,4,5];
// let a2=[8,12,a1,19];
// //[8,12,[3,4,5],19]

// console.log(a2);// ->[8, 12, Array(3), 19]

// let a1=[3,4,5];
// let a2=[8,...a1,19];
// //[8,12,[3,4,5],19]

// console.log(a2);// ->(5) [8, 3, 4, 5, 19]

// let a1=[3,4,5];
// let a2=[...a1];
// // [[3,4,5]]

// console.log(a2);// ->(3) [3, 4, 5]
// console.log(a1===a2);

// let s1="abc";
// let s2=[...s1]
// console.log(s2); //->(3)['a', 'b', 'c']

// let obj1={x:1,y:2};
// let obj2={a:10, ...obj1, b:20}
// console.log(obj2); //-> {a: 10, x: 1, y: 2, b: 20}



//-----------------Higher Oder Function-------------------
// Higher Oder Function =>functions which returns/takes
// function as values

//callme => higher order function
// function callme(){
//     return () =>{
//         console.log("Returned Function");
//     }
// }
// //callme2 => higher order function
// function callme2(x){
//     x();
// }
// callme2(() =>{});

//=========== callback function ================
//callback function => the function which is passed
//             as an argument to another function is called
//             as callback function. 


// function parent(child){
//     child();
// }
// parent(function(){ //call back function
//     console.log("Inside child function");
// })

// function parent(a){
//     console.log(a);
// }
// function func(){
//     return 20;
// }
// parent(func)


// let arr = [5,6]

// function forEach(callback){
//     //callback => parameter

//     for(let i=0; i<arr.length; i++){
//         callback(arr[i],i,arr);
//     }
// }
// function x(element, index, list){
//     console.log(element,index);
// }
// forEach(x)

// let result=arr.forEach(function(element,index,list){
//     console.log(element,index,list);
// })

// console.log(result);

/*
the higher order function available in arrys are
    1. forEach (doesn't retun anything)
    2. map (returns another array of same length)
    3. filter
    4. reduce
*/

// let arr=[5,6,8]
// let result1 = arr.forEach(function(element,index,list){
//     console.log(element,index,list);
// })
// console.log(result1);

// let result2 = arr.map(function(element,index,list){
//     console.log(element,index,list);
//     return element+index;
// })
// console.log(result2);

// let result = arr.filter(function(element, index, list){
//     return true;
// })
// console.log(result); // result =[5,6,8]

// let result = arr.filter(function(element, index, list){
//     return (element%2===0);
// })
// // console.log(result);// result=[6,8]

// function filter(callback){
//     let aggregatedArray=[];
//     for(let i=0;i<arr.length;i++){
//         callback(arr[i],i,arr) && aggregatedArray.push(arr[i])
//     }
//     return aggregatedArray;
// }
// // console.log(filter(() =>true)); //(3) [5, 6, 8]
// console.log(filter((element,index) =>index%2===0)); //(2) [5,8]

//============== reduce ===========
/*
let arr=[5,6]

function reduce(callback, intialValue){
    let index=intialValue !==undefined ? 0 : 1;
    let aggregatedValue= intialValue ? intialValue:arr[0];
    for(let i=index;i<arr.length;i++){
        aggregatedValue=callback(aggregatedValue,element,arr[i],i,list)
    }
    return element+previousValue;
}
// let result = arr.reduce(function(previousValue,element,index){
//     console.log(previousValue,element,index);
//     //10,5,0
//     //undefined ,6,1

//     //10,5,0
//     //10+5=15

//     //15,6,1
//     //15+6=21

//     return previousValue+element;
// },10)
// console.log(result);  //21


// let result = arr.reduce(function(previousValue,element,index){
//     console.log(previousValue,element,index);
    
// },10)
// console.log(result);  

let result = arr.reduce(function(previousValue,element,index){
    console.log(previousValue,element,index);
    
})
console.log(result); 
/*
5 6 1
undefined
*/
