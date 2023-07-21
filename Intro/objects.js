//arrys and objects
// let user={
//     email:'chaudharysonu2614@gmail.com',
//     password:'123456789'
// }
// user.email="chaudharysonu@gmail.com",
// console.log(user)

// user["email"]="chaudhary@gmail.com",
// console.log(user)

// delete user.email
// console.log(user)

// delete user["email"]
// console.log(user)
// to create a key
// to update a key, value pair
// to deletea key, value pair

// let x="password";
// console.log(user[x])


// console.log(user.email)
// console.log(user["password"])
// in javascript if the value is not given then it gives output as undefined
// console.log(user.abc)

// let a;
// console.log(a)             -->undefined
// console.log(a.abc)         -->Uncaught TypeError: Cannot read properties of undefined (reading 'abc')


// mobile
// device details -> processor, cammera, RAM, storage, battery
// let product={
//     name:'Redmi',
//     model:'8 Pro',
//     price:15000,
//     details:{
//         processor:'snapdragon 780',
//         RAM:'6GB',
//         cammera:'16MP',
//         storage:'128GB',
//         battery:'4500mAh'

//     },
//     colors: [
//         "black",
//         "white",
//         "gray"
//     ],
//     available: true
//}
// console.log(product.colors);
// console.log(product.colors.length);

// if(product.available){
//     console.log("Product available")
// }
// else{
//     console.log("Not available")
// }

// {key:value}, value-> value can be of any data type

// let x=true;
// + =>2+3 binary
// ++ => unary x++ ++x
// oparand1 ? oparand2(if) : oparand3(else)

// console.log(2+4);
// let result=x ? 2 : 4
// console.log(result)

// let res=x ? console.log("inside if"): console.log("inside else")
// console.log(res)
// if(x){
//     console.log("inside if");
// }
// else{
//     console.log("inside else");
// }

// let x = 90;
// x ? console.log("inside if"): console.log("inside else")

// let x = '';
// x ? console.log("inside if"): console.log("inside else")

//iterate

// let user = {
//     username:'sonu',
//     password:123
// }

// let arr=[3,4,5,6]

/*
[3, 4, 5, 6]
0   1  2  3
*/

//for of loop iterates on the values of data structure
//for in loop iterates on the keys...

// for(let x of arr){
//     console.log(x);
// }

// for(let x in arr){
//     console.log(x);
// }

// for(let i=0;i<=2;i++){
//     console.log(i,arr[i]);
// }

// let obj = {
//     "123name":'sonu',
//     password:'123',
//     123:true
// }
// console.log(obj.name, obj["name"]);
// console.log(obj["123name"],obj."123name");
//Number Boolean Object
//x="name"
//obj[x]=>obj["name"]
// "name", "password"
// for(let x in obj){
    // console.log(x, typeof x)

    //x="name" , obj[x]=>obj["name"]
    //x="password" , obj[x]=>obj["password"]
    // console.log(x, obj[x])
// }

// for(let x of obj){  objects.js:136 Uncaught TypeError: obj is not iterable at objects.js
//     console.log(x);
// }

// for(let x in obj){
//     console.log(x);
// }
// let ar=[3,4,5]
// //      0 1 2
// for(let x in ar){
//     console.log(x);
// }

// let ob={a:1, b:false, c:"x" }
// for(let x in ob){
//     console.log(x);
// }

// let a="sonu";
// let arr= [
//     23,
//     false,
//     undefined,
//     true,
//     a,
//     {
//         a:10,
//         b:20
//     }
// ]

// console.log(arr[3]);
// arr[5]["sonu"]
// console.log(arr[5][a]);

// for(let i in arr){
//     console.log(i);
// }
let user=["sonu","123"]
console.log(user[0]);

