 //ask how the user is feeling on a scale from 1 to 10 : feeling
    //emit 
    //if below 5 ask if user is sleeping well and get a yes or no answer 1 to 8 : sleep

    // if below no then give them a fake number to call for help:helpPhone

// make json file with Ans 1 /ans 2 / ans3 check if not blank and if meets right conditions
//then answer the index page
//reset the json file element to blank


let express = require("express")

let app = express()

let http = require("http").Server(app)

let io = require('socket.io')(http)

roboTalk = "How are you feeling? Please enter a number between 1-10"

app.get("/", (request,response)=>{
    response.sendFile(__dirname+"\\index.html")
})

io.on("connection",(socket)=>{
    console.log("connection made to Client...")
    
   

    socket.emit("giveChat",roboTalk)
    socket.on("getChatMore",(chatMe)=>{
        console.log("this is chat me "+ chatMe)
        
        if (parseInt(chatMe)>=1 && parseInt(chatMe)<=10){
            if (parseInt(chatMe)<=5){
                roboTalk = "you are not feeling well. Did you get 8 hours of sleep? please enter yes or no"
                socket.emit("giveChat",roboTalk)  
            }else{
                roboTalk = "you are feeling above average I hope you have a nice day"
                socket.emit("giveChat",roboTalk)  

            }
            
        }else if(chatMe == "no"|| chatMe == "No"){
            roboTalk = "We recomend you to take Dr.Sleep pills. If you would like more information call (555)-555-5555"
            socket.emit("giveChat",roboTalk) 
        }else if(chatMe == "yes"|| chatMe == "Yes"){
            roboTalk = "I am sorry Dr.Sleep cannot help you"
            socket.emit("giveChat",roboTalk) 
        }else{
            roboTalk = "you have entered the wrong thing try again"
            socket.emit("giveChat",roboTalk)
        }
    })
})


http.listen(9090,()=>("9090 Server running..."))