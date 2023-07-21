// var x=20;
// var x=30; //x=30

// obj =10; //var obj=10
// var obj =20; 


// let a=20; 
// let a=12; //Unexpected identifier 'a' 

let divNode = {
    tagName:"div",
    className:"b",
    id:"parent",
    style: {
        color:'red',
        backgroundColor:'blue'
    },
    children: [
        {
            tagName:"div",
            id:"child",
            innerText:'abc',
            children: []
        },
        {
            tagName:'p',
            innerText:'Some Para',
            children:[]
        },
        {
            tagName:'button',
            innerText:'Button',
            children:[],
            disabled:true
        }
    ]
}

//divNode = #100
//divNode.style = #200
//divNode.children = #300 = [#500 #600 #700]

//DOM : DOCOUMENT OBJECT MODEL

let para = {
    innerText:"Simple Para"
};
para.innerText="sonu";

// let para= #400;

/*

1. Create a node using JS
2. Update/manipulate an existing node
3. Deletion of a node.

*/

/*

WEB API

// object =>

//docoment

*/
// console.log(document);
// console.log(document.body);
// console.log(document.getElementById);
// let htmlNode = document.getElementById("abc");
// console.log(htmlNode);//<p id="abc">Simple Para</p>
// console.log(htmlNode.id); //abc
// console.log(htmlNode.innerText); //Simple Para
// console.log(htmlNode.innerText.length); //11

// htmlNode.innerText="sonuChaudhary";

// console.log(htmlNode.className);
// htmlNode.className="" ;

// htmlNode.remove();

// let obj ={
//     x:10,
//     y:20,
//     callme:function(){
//         console.log("Inside function");
//     }
// }
// obj.callme();

//===================== EVENTS  ========================

/*
(mouse click) clicking on an element is an event
scrolling
dragging
pressing on a keyboard's key
swiping 
selecting
changing input
mouse hover
mouse un hover...

*/

// function callme(){
//     console.log(1+2);
// }
// callme()

// const paraElement =document.getElementById("abc");

// function changeText(){
//     //toggle the text between sonuChaudhary =>smritiChaudhary
//     paraElement.innerText=paraElement.innerText===
//     "smritiChaudhary" ? "sonuChaudhary":"smritiChaudhary"

// }


const paraElement =document.getElementById("abc");

function changeText(){
    paraElement.className=paraElement.className==="danger" ? "success" : "danger"
}

function doubleClick(){
    console.log("Double clicked");
}




