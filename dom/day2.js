// const parentElement = document.getElementById("parent");

// const divElement =document.getElementsByTagName("div");

// console.log(parentElement );

// console.log(divElement);

//--------------line 81
//Creation of a node(HTML ELEMENT )


//tagname => <b> Bold Text</b>
// class HTMLCollection{
//     constructor(){

//     }
//     method1(){

//     }
//     method2(){

//     }
// }
// function createElement(){
//     return new HTMLCollection()
// }
// const boldElement = document.createElement("b")

// // console.log(boldElement);

// //attach above reference as a child for body element

// boldElement.innerText="Sonu & smriti"
// const bodyElement=document.body;

// bodyElement.append(boldElement)

// const bodyElement=document.body;

// const div =document.createElement("div");
// div.innerText="Something";
// div.style.color="red";
// div.style.fontSize="350px"
// bodyElement.append(div);

// const bodyElement=document.body;

// const div =document.createElement("div");
// div.innerText="No";
// div.style.color="red";
// div.style.fontSize="500px";
// // div.style.marginLeft="400px"
// div.style.border="100px solid pink"
// bodyElement.append(div)

// const bodyElement=document.body;

// const div=document.createElement("div");
// div.innerText="Nothing";
// div.style.color="blue";
// bodyElement.append(div);

// const root =document.getElementById("root");
// const bold=document.createElement("b")
// bold.innerText="Sonu Kumar";

// bold.style.border="2px solid red";
// bold.style.padding="10px";
// root.append(bold)

// function addBold(){
//     const root =document.getElementById("root");
//     const bold=document.createElement("b")
//     bold.innerText="Sonu Kumar";

//     bold.style.border="2px solid red";
//     bold.style.padding="10px";
//     root.append(bold)
// }

// function addBold(){
//     const root =document.getElementById("root");
    
//     const bold=document.createElement("b")
//     bold.innerText="Sonu Kumar";

//     const p=document.createElement("p")
//     p.innerText="Para text";

//     bold.style.border="2px solid orange";
//     bold.style.padding="10px";

//     p.style.border="2px solid green ";
//     p.style.padding="10px";
//     root.append(bold,p)
// }


// const root =document.getElementById("root");
// function addBold(){
    
//     const bold=document.createElement("b")
//     bold.innerText="Sonu Kumar";

//     const p=document.createElement("p")
//     p.innerText="Para text";

//     bold.style.border="2px solid orange";
//     bold.style.padding="10px";

//     p.style.border="2px solid green ";
//     p.style.padding="10px";
//     root.append(bold,p)
// }

// const modal=document.getElementById("modal");

// function openModal(){
//     modal.style.display="flex";
// }

// function closeModal(){
//     modal.style.display="none";
// }



// function openModal(){
//     const modal=document.createElement("div");
//     modal.className="modal";//#100

//     const modalBody=document.createElement("div");
//     modalBody.className="modal-body";// #300

//     const input=document.createElement("input"); //#200

//     const submitButton=document.createElement("button") //#400
//     submitButton.innerText="submit"; 
//     submitButton.onclick=closeModal

//     modalBody.append(input,submitButton);
//     modal.appendChild(modalBody);

//     document.body.append(modal);
// }

// function closeModal(){
//     const modal=document.getElementsByClassName("modal")[0];
//     modal.computedStyleMap.display="none";
// }

// function callme(){
    
//     alert("you clicked the button")
// }

// const button=document.getElementById("btn")
// //addEventListener(eventType,callback)
// button.addEventListener("click",callme);
// button.addEventListener("click",() =>{
//     console.log("second click event")
// })

// button.addEventListener("mouseover",() =>{
//     console.log("You hovered on the button");
// })

// button.addEventListener("mouseleave",() =>{
//     console.log("You un hovered on the button");
// })

// const input=document.getElementsByTagName("input")[0];

// input.addEventListener("focus",() =>{
//     console.log("focused on the input");
// })

// input.addEventListener("blur",() =>{
//     console.log("You unfocused on the input");
// })

// input.addEventListener("change",() => {
//     console.log("input changed");
// })

// input.addEventListener("change",(obj) => {
//     console.log(obj);
// })

// function addEventListener(callback){
//     callback({name:"sonu"})
// }

// addEventListener((obj)  => {
//     console.log(obj);
// }) 

// input.addEventListener("change",(event) => {
//     const inputElement = event.target;
//     console.log(inputElement);
//     console.log(inputElement.value);
// })

// input.addEventListener("keydown",(event) => {
//     console.log(event.target.value);
// })

// input.addEventListener("keyup",(event) => {
//     console.log(event.target.value);
// })

let user = [
    "vipul",
    "ajmal",
    "saikumar",
    "sonu",
    "arravind",
    "vikram"
]

const resultsContainer=document.getElementById("result");
function search(searchString){
    return user.filter((username) => {
        return username.includes(searchString)
    })
}

input.addEventListener("keyup",(event)=>{
    const searchValue=event.target.value;

    let filteredUserd=search(searchedValue);
    
    resultsContainer.innerText="";
    for(let i=0;i<filteredUsers.length;i++){
        const div=document.createElement("div");
        div.innerText=filteredUsers[i];
        resultContainer.appendChild(div);
    }

})