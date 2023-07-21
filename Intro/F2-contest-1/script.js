/** @format */

let array = [
    { id: 1, name: "priya", age: "27", profession: "admin" },
    { id: 2, name: "shivam", age: "25", profession: "programmer" },
    { id: 3, name: "khushi", age: "18", profession: "developer" },
];

function PrintDeveloperbyMap() {
        //Write your code here , just console.log
        array.map( (item) => {
            if(item.profession === "developer"){
                console.log(item);
            }
        })
    }
    
    function PrintDeveloperbyForEach() {
        //Write your code here , just console.log
        array.forEach( (item) => {
            if(item.profession === "developer"){
                console.log(item);
            }
        })
    }
    
    function addData() {
        //Write your code here, just console.log
        let getid = array.length;
        let newarray = {id:getid+1,name:"sonu",age:"25",profession:"programer"};
        array.push(newarray);
        console.log(array);
    }
    
    function removeAdmin() {
        //Write your code here, just console.log
        array.filter( (item) => {
            if(item.profession !== "admin"){
                console.log(item);
            }
        });
    }
    
    function concatenateArray() {
        //Write your code here, just console.log
        let employees = [
            { id: 5, name: "nikhil", age: "22", profession: "web-dev" },
            { id: 6, name: "smriti", age: "28", profession: "senior-dev" },
            { id: 7, name: "neha", age: "26", profession: "programmer" }
        ];
        let addarray = array.concat(employees);
        console.log(addarray);
    }