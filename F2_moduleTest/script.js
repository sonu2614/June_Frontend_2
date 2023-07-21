var registerBtn=document.getElementById("register-btn");
var registerForm=document.getElementById("register-form");
// var updateBtn=document.getElementById("update-btn");


var userData=[];
var nameS=document.getElementById("name");
var emailS=document.getElementById("email");
var cgpaS=document.getElementById("cgpa");
var ageS=document.getElementById("age");
var degreeS=document.getElementById("degree");

registerForm.onsubmit=function(){
    // e.preventDefault();
    regitrationData();
    getDataFromLocal();
    registerForm.reset('');
}




if(localStorage.getItem("userData")!=null){
    userData = JSON.parse(localStorage.getItem("userData"));
}

function regitrationData(){
    userData.push({
        name:nameS.value,
        email:emailS.value,
        cgpa:cgpaS.value,
        age:ageS.value,
        degree:degreeS.value

    });
    var userString=JSON.stringify(userData);
    localStorage.setItem("userData",userString);
}

var tableData=document.getElementById("table-data");

const getDataFromLocal= () => {
    tableData.innerHTML="";
    userData.forEach((data,index)=>{
        tableData.innerHTML+=`
        <tr index=${index}>
                <td>${index+1}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.cgpa}</td>
                <td>${data.age}</td>
                <td>${data.degree}</td>
                <td>
                
                <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="del-btn"><i class="fa fa-trash">
                </td>
            </tr>`
    });
    //delet coding
    var i;
    var allDelBtn=document.querySelectorAll(".del-btn")
    for(i=0;i<allDelBtn.length;i++){
        allDelBtn[i].onclick=function(){
            var tr=this.parentElement.parentElement;
            var id=tr.getAttribute("index");
            userData.splice(id,1);
            localStorage.setItem("userData",JSON.stringify(userData));
            tr.remove();
        }
    }
}
getDataFromLocal();


function search() {
    var input, filter, table, tr, td, i, txtValue, txtValue1, txtValue2;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        td1 = tr[i].getElementsByTagName("td")[2];
        td2 = tr[i].getElementsByTagName("td")[5];

        if (td || td1 || td2) {
            txtValue = td.textContent || td.innerText;
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }

            else {
                tr[i].style.display = "none";
            }

        }
    }
}



    //update coding
    // var allEdit=document.querySelectorAll(".edit-btn")
    // for(i=0;i<allEdit.length;i++){
    //     allEdit[i].onclick = function(){
    //         var tr=this.parentElement.parentElement;
    //         var td=tr.getElementsByTagName("td");
    //         var index=tr.getAttribute("index");
    //         var name=td[1].innerHTML;
    //         var email=td[2].innerHTML;
    //         var cgpa=td[3].innerHTML;
    //         var age=td[4].innerHTML;
    //         var degree=td[5].innerHTML;
    //         registerForm.click();
    //         nameS.value=name;
    //         emailS.value=email;
    //         cgpaS.value=cgpa;
    //         ageS.value=age;
    //         degreeS.value=degree;
    //     }
    // }



