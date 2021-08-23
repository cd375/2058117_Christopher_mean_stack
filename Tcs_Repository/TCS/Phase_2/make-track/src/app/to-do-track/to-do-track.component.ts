import { Component, OnInit, ViewChild,OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';


export interface MeToDo{
  oID:string
  oName:string
  oTask:string
  oLine:any
}



@Component({
  selector: 'app-to-do-track',
  templateUrl: './to-do-track.component.html',
  styleUrls: ['./to-do-track.component.css']
})



export class ToDoTrackComponent implements OnInit {
  
   THIS_DATA:Array<MeToDo> = [{oID:"", oName:"", oTask:"", oLine:""}]

  
  toDoFrm = new FormGroup ({
    eID: new FormControl(),
    name: new FormControl(),
    task: new FormControl(),
    dLine: new FormControl(),
  })
  cat:any
  displayedColumns: string[] = ['oID', 'oName', 'oTask', 'oLine'];
  newSetTasks:any
  //newSetTasks = new MatTableDataSource<MeToDo[]>();
  public paramID?:any
  public paramName?:any
  public paramTask?:any
  public paramLine?:any
  paramsTable:any
  testMyParam:string = ""
  testMSG = ""
  testMSG2 = ""
  setData:any




  
  constructor( private router:Router, private aRoute : ActivatedRoute) {
    this.newSetTasks = new MatTableDataSource<MeToDo>([...this.THIS_DATA]);

    console.log("constructor runs")
   }

  ngOnInit(): void {

  }
  
  disPlayTable():any{
    let toDoTasks = this.toDoFrm.value
    
      if(
        toDoTasks.eID !== null && 
        toDoTasks.name !== null && 
        toDoTasks.task !== null &&
        toDoTasks.dLine !== null
        ){
        this.aRoute.paramMap.subscribe((params: ParamMap)=>{
          let id = params.get('id')
          let name = params.get('name')
          let task = params.get('task')
          let line = params.get('line')
          this.setData = {oID:id,oName:name,oTask:task,oLine:line}
          
              const newUsersArray = this.THIS_DATA
              newUsersArray.push(this.setData);
              this.newSetTasks = [...newUsersArray];// refresh the datasource
              this.setData = {oID:"",oName:"",oTask:"",oLine:""};
              console.log("newSetTasks array "+this.newSetTasks);

              console.log(JSON.stringify("set Data "+this.setData))
              console.log(JSON.stringify("user Array "+newUsersArray))
            
        })
    }else{
     console.log("first if not working!!!!!")
    }

  } 

  

  setInfo(){
    
    let toDoTasks = this.toDoFrm.value
    if(
      toDoTasks.eID !== null && 
      toDoTasks.name !== null && 
      toDoTasks.task !== null && 
      toDoTasks.dLine !== null 
      ){
      
      this.router.navigate(['makeTbl',{id:toDoTasks.eID,name:toDoTasks.name,task:toDoTasks.task,line:toDoTasks.dLine}])

      this.testMSG = "this loop WORKS !!"
      console.log("this is the id after click  "+toDoTasks.eID)
      
    }else{
      this.testMSG = " this loop buttion did not work"
      console.log("check repeat")
    }
    
    
    
    
  }
  
}
