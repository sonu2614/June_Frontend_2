let data=[]; 

fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
.then(respone=>responce.json())
.then(dataResponce=>{
    data=dataResponce;
    console.log(data)
    //Call Display function
    renderTable(data);
})
.catch(
    error=>console.error('Error:',error)
)

//display function
function renderTable(data){
    console.log(data,"display function called");
    const tableBody=document.getElementById("tablebody");
    tableBody.innerHTML="";
    data.forEach(item=>{
        const row=document.createElement('tr');
        const percentageChange=item.price_change_percentage_24;
        const percentageChangeClass=percentageChange>=0?'positive-change':"negative"
    })

}

//search function

//sort function 1

//sort function 2