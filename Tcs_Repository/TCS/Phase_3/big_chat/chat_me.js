let express = require("express")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let cors = require("cors")


let dbUrl = "mongodb://localhost:27017/bigChatInfo"
mongoose.pluralize(null)

mongoose.connect(dbUrl).then(res=>console.log("db Connected...")).catch(err=>console.log(err))
let db = mongoose.connection


let app = express()
let http = require("http").Server(app)
let io = require("socket.io")(http)


app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

db.once("open",()=>{
    console.log("once open...")
    let chatSchema = mongoose.Schema({
        name:String,
        message:String
    })

    app.get("/",(request,response)=>{

        let chatModel = mongoose.model("NewChat",chatSchema)
        
        io.on("connection",(socket)=>{
            socket.on("bigChatMsg",(msg)=>{
                console.log("this is msg...."+JSON.stringify(msg))
                chatModel.insertMany(msg,(err,result)=>{
                    if(!err){
                        console.log("insert many..."+result)
                    }else{
                        console.log("insert many err.."+err)
                    }
                })
            })
        })


        response.sendFile(__dirname+"\\bigChat.html")
    })


    app.post("/bigChat",(request,response)=>{
        response.sendFile(__dirname+"\\bigChat.html")
    })






})


http.listen(9090, ()=>console.log("server is running..."))