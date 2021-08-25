let fs = require("fs");
let readMe = require("readline")

var reading = readMe.createInterface({
    input:process.stdin,
    output:process.stdout
})
var newInfoArray = new Array;
var infoStringArray = new Array;
var theDateIs = new Date;

function enterMyInfo(){
    reading.question("Enter your first name ",(firstName)=>{
        debugger;
        reading.question("Enter you last name ",(lastName)=>{
            debugger;
            reading.question("Enter your gender ", (gender)=>{
                debugger;
                reading.question("Enter your age ", (age)=>{
                    debugger;
                    reading.question("Enter email ", (eMail)=>{
                    //let newInfoArray = []
                        
                        let objInfo = {
                        fName:firstName, 
                        lName:lastName, 
                        myGender:gender, 
                        myAge:age, 
                        myEMail:eMail
                        }
                    console.log("object is "+ JSON.stringify(objInfo))
                // for(let i = newInfoArray.length - 1 ; i<=0 ;i--){
                    //newInfoArray.splice(newInfoArray.length,0,objInfo)
                // }
                //newInfoArray = [...objInfo]
                    newInfoArray.push(objInfo)
                    newInfoArray.push(
                        parseInt(theDateIs.getMonth()+1)+"-"+
                        theDateIs.getDate()+"-"+
                        theDateIs.getUTCFullYear()+"  "+
                        theDateIs.getHours()+":"+
                        theDateIs.getMinutes()
                    )
                   



                    infoStringArray = JSON.stringify(newInfoArray)

                    fs.writeFileSync("infoRec.json", infoStringArray)
                    console.log("this is array  "+infoStringArray)

                    enterMyInfo()
                    //reading.close()
                    })

                })
            })
        })
    })
}

enterMyInfo()

//console.log("OUTSIDE   "+newArray)