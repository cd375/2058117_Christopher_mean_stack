let http = require("http")
let url = require("url")
let fs = require("fs")
let dbTasks = JSON.parse(fs.readFileSync("task.json").toString())


let planPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Task Planner</h1>
        <div>
            <h2>Add Task</h2>
            <form action="addMe">
                <label for="">Employee ID</label>
                <input type="text" name="empID" id="empID"> <br>
                <label for="">Task ID</label>
                <input type="text" name="taskID" id="taskID"><br>
                <label for="">Task </label>
                <textarea name="task" id="task" cols="30" rows="10"></textarea><br>
                <label for="">Dead Line</label>
                <input type="date" name="dLine" id="dLine"><br>
                <input type="submit" value="Add Task"><br>
            </form>
        </div>
        <hr>
        <hr>
        <div>
            <form action="deleteMe">
                <h2>Delete task</h2>
                <label for="">Task ID</label>
                <input type="text" name="delTask" id="delTask"><br>
                <input type="submit" value="Delete"><br>
            </form>
        </div>
        <hr>
        <hr>
        <div>
            <table border="1">
                <tr>
                    <th>Employee ID</th>
                    <th>Task ID</th>
                    <th>Task Description</th>
                    <th>Dead Line</th>
                </tr>
                ${showMe(dbTasks)}
            </table>
        </div>
    </body>
    </html>

`

let server = http.createServer((request,response)=>{
    let urlInfo = url.parse(request.url,true)
    if(urlInfo.path != "/favicon.ico"){
        console.log("inside if")
        if(urlInfo.pathname == "/addMe"){
            let taskArray = urlInfo.query
            let results = dbTasks.find(tID=>tID.taskID == taskArray.taskID)
            
            
            response.writeHead(200,{"content-type":"text/html"})
            if(results == undefined){
                dbTasks.push(taskArray)

                fs.writeFileSync("task.json", JSON.stringify(dbTasks))
                response.write("added to json file")
                response.write(
                    `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                            <h1>Task Planner</h1>
                            <div>
                                <h2>Add Task</h2>
                                <form action="addMe">
                                    <label for="">Employee ID</label>
                                    <input type="text" name="empID" id="empID"> <br>
                                    <label for="">Task ID</label>
                                    <input type="text" name="taskID" id="taskID"><br>
                                    <label for="">Task </label>
                                    <textarea name="task" id="task" cols="30" rows="10"></textarea><br>
                                    <label for="">Dead Line</label>
                                    <input type="date" name="dLine" id="dLine"><br>
                                    <input type="submit" value="Add Task"><br>
                                </form>
                            </div>
                            <hr>
                            <hr>
                            <div>
                                <form action="deleteMe">
                                    <h2>Delete task</h2>
                                    <label for="">Task ID</label>
                                    <input type="text" name="delTask" id="delTask"><br>
                                    <input type="submit" value="Delete"><br>
                                </form>
                            </div>
                            <hr>
                            <hr>
                            <div>
                                <table border="1">
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Task ID</th>
                                        <th>Task Description</th>
                                        <th>Dead Line</th>
                                    </tr>
                                    ${showMe(dbTasks)}
                                </table>
                            </div>
                        </body>
                        </html>

                    `
                )
               
            }else{
                response.write("task Id not unique")
                response.write(planPage)
            }

        }else if(urlInfo.pathname == "/deleteMe"){
            let taskArray = urlInfo.query
            let resultsIndex = dbTasks.findIndex(tID=>tID.taskID == taskArray.delTask)
            
            
            response.writeHead(200,{"content-type":"text/html"})
            if(resultsIndex !==-1){
                
                dbTasks.splice(resultsIndex,1)
                fs.writeFileSync("task.json", JSON.stringify(dbTasks))
                response.write("deleted to json file")
                response.write(
                    `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>Task Planner</h1>
                        <div>
                            <h2>Add Task</h2>
                            <form action="addMe">
                                <label for="">Employee ID</label>
                                <input type="text" name="empID" id="empID"> <br>
                                <label for="">Task ID</label>
                                <input type="text" name="taskID" id="taskID"><br>
                                <label for="">Task </label>
                                <textarea name="task" id="task" cols="30" rows="10"></textarea><br>
                                <label for="">Dead Line</label>
                                <input type="date" name="dLine" id="dLine"><br>
                                <input type="submit" value="Add Task"><br>
                            </form>
                        </div>
                        <hr>
                        <hr>
                        <div>
                            <form action="deleteMe">
                                <h2>Delete task</h2>
                                <label for="">Task ID</label>
                                <input type="text" name="delTask" id="delTask"><br>
                                <input type="submit" value="Delete"><br>
                            </form>
                        </div>
                        <hr>
                        <hr>
                        <div>
                            <table border="1">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Task ID</th>
                                    <th>Task Description</th>
                                    <th>Dead Line</th>
                                </tr>
                                ${showMe(dbTasks)}
                            </table>
                        </div>
                    </body>
                    </html>

                `

                )
             
                
            }else{
                response.write("task Id not found")
                response.write(planPage)
            }
        }else{
            response.write(planPage)
        }
    }else{
        response.write("goodby")
    }
    
    

    response.end()
})

function showMe(dbTask){
    let disMe;
    for(let dbT of dbTask){
        disMe = disMe + `
            <tr>
                <td>${dbT.empID}</td>
                <td>${dbT.taskID}</td>
                <td>${dbT.task}</td>
                <td>${dbT.dLine}</td>
            </tr>
        `
        
    }
    //if statment to tell when db tasks grows or shinks
    return disMe
    
}

server.listen(9090, ()=>console.log("server is running..."))