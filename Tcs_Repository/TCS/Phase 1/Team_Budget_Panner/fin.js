


var cliArray = new Array();
var table = document.getElementById("main");
var arrayData = new Array()
var arr = new Array();
var objData = new Object();
var mathArray = new Array()



 const fillBud = function (ev){
     ev.preventDefault();
    

       
    if (localStorage.getItem("proObj")) {
        
        let getProd = localStorage.getItem("proObj");
        console.log("this is a string  "+ getProd);

        let cliJson = JSON.parse(getProd);
       
        var cliArray = cliJson ;


        for (let i = cliArray.length-1 ;i> -1; i--) {   
            if(cliArray[i].budgetNum == "" || cliJson == undefined|| cliArray[i].budgetNum == null ){
                console.log("undifined row")
            }else{
                tableData(cliArray[i].cliName , cliArray[i].proName, cliArray[i].budgetNum);
            }


        }
        
    }else if(localStorage.getItem("proObj") == null){
        localStorage.setItem("proObj", [])
    }
}


const displayFull = function (event) {
    event.preventDefault()
    

    var client = document.getElementById("cli").value;
    console.log("this is the inputed value of client"+client);
    var project = document.getElementById("pro").value;
    console.log("this is the inputed value of project"+project);
    var budget = document.getElementById("budget").value;
    console.log("this is the inputed value of budget"+budget);
    
   
      
    
    var objData = {cliName:client, proName:project, budgetNum:budget}
   
    arrayData.push(objData)
    
    document.getElementById("form-1").reset();
         
    localStorage.setItem("proObj",JSON.stringify(arrayData));

    if(objData.budgetNum == ""){
        console.log("undifined row")
    }else{
        tableData(client, project, budget)
    }  
}

function tableData(client, project, budget){

        var table = document.getElementById("main");
        var row = table.insertRow()//tr
       
        var colCli = row.insertCell(0)//td
        var colPro = row.insertCell(1)//td
        var colBud = row.insertCell(2)//td
       
        colCli.innerText = client;
        colPro.innerText = project;
        colBud.innerText = budget;

        table.insertBefore(row, table.firstElementChild.nextSibling)
    
}

function doMyMath (){
    let getProd = localStorage.getItem("proObj");
    console.log("this is a string  "+ getProd);

    let cliJson = JSON.parse(getProd);
    console.log("this is the parse "+JSON.stringify(cliJson));
    console.log("length"+ cliJson.length);

    var mathArray = cliJson ;
    var mathTotal = 0;
    for (let i = 0; i < mathArray.length ;i++){
        var mathTotal = mathTotal + parseInt(mathArray[i].budgetNum);
    }
    var content = document.getElementById("total").innerText = mathTotal
    return content;
}
if(document.getElementById("add") !== null){
    document.addEventListener("DOMContentLoaded",()=>{
        document.getElementById("add").addEventListener("click", displayFull)
    });
}
window.onload = fillBud;

console.log(" this is math " + doMyMath())


