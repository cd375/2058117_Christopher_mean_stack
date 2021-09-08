
let express = require("express")
let mongo = require("mongoose")
let bodyParser = require("body-parser")
let cors = require("cors")


let dbURL = "mongodb://localhost:27017/newCourseInfo"
mongo.pluralize(null); 
mongo.connect(dbURL).then(res=>console.log("db Connected ")).catch(err=>console.log(err))
let db = mongo.connection

let app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

let tableRow = "";

 //mongoose
db.once("open",()=>{
    console.log("inside open")
    let addSchema = mongo.Schema({
        cID:String,
        cName:String,
        description:String,
        amount:String
    })

    app.get("/",(request,response)=>{
        response.sendFile(__dirname+"\\home.html")
    })
    app.get("/home",(request,response)=>{
        response.sendFile(__dirname+"\\home.html")
    })

    app.get("/addMe",(request,response)=>{
        response.sendFile(__dirname+"\\addMe.html")
    })
    app.post("/addMe",(request,response)=>{
        let courseFacts = request.body

        let addModel = mongo.model("NewCourses",addSchema)
        let courseDB = new addModel(courseFacts)
        console.log(JSON.stringify(courseFacts))
        
        addModel.insertMany(courseDB,(err,result)=>{
            if(!err){
                console.log("this is add result ..."+result)
            }else{
                console.log("this is add err..."+err)
            }
        })

        response.sendFile(__dirname+"\\addMe.html")
    })
  
    app.get("/updateMe",(request,response)=>{
        response.sendFile(__dirname+"\\updateMe.html")
    })
    app.post("/updateMe",(request,response)=>{
        let updateInfo = request.body

        let updateModel = mongo.model("NewCourses",addSchema)
        
        console.log(JSON.stringify(updateInfo))
        
        updateModel.updateOne({cID:updateInfo.updateCID},{$set:{amount:updateInfo.updateAmount}},(err,result)=>{
            if(!err){
                console.log("this is update result ..."+result)
            }else{
                console.log("this is update err..."+err)
            }
        })

        response.sendFile(__dirname+"\\updateMe.html")
    })

    app.get("/deleteMe",(request,response)=>{
        response.sendFile(__dirname+"\\deleteMe.html")
    })
    app.post("/deleteMe",(request,response)=>{
        let deleteInfo = request.body

        let deleteModel = mongo.model("NewCourses",addSchema)
        
        console.log(JSON.stringify(deleteInfo))
        
        deleteModel.deleteOne({cID:deleteInfo.deleteCID},(err,result)=>{
            if(!err){
                console.log("this is delete result ..."+result)
            }else{
                console.log("this is delete err..."+err)
            }
        })

        response.sendFile(__dirname+"\\deleteMe.html")
    })

    app.get("/fetchMe",(request,response)=>{
        

        let fetchModel = mongo.model("NewCourses",addSchema)
        
        
        
        fetchModel.find({},(err,result)=>{
            if(!err){
                console.log("this is find result ..."+result)
                
                for(let doc of result){
                    tableRow = tableRow + `
                    <tr>
                        <td>${doc.cID}</td>
                        <td>${doc.cName}</td>
                        <td>${doc.description}</td>
                        <td>${doc.amount}</td>
                    </tr>
                    `
                }

                console.log("tableRow......"+ tableRow)
                response.send(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Fetch Me</title>
                </head>
                <body>
                    <div>
                        <table border="1" id="myTable" >
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Course Description</th>
                                <th>Course Ammount</th>
                            </tr>
                            ${tableRow}
                        </table>
                        <a href="home">Back</a>
                    </div>
                </body>
                </html>
                `)

            }else{
                console.log("this is find err..."+err)
            }
        })
    })
 })


app.listen(9090, ()=>console.log("server is running..."))