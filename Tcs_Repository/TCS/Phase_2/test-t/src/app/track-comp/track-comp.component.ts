import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ChildActivationStart,ParamMap} from '@angular/router';
import { ResultFunc } from 'rxjs/internal/observable/generate';
import { ColTasksService } from '../col-tasks.service';
import { EmpInfo } from '../emp-info.model';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
//import { Observable, of } from 'rxjs';
//import { switchMap } from 'rxjs/operators';
//import { ParamMap } from '@angular/router';



@Component({
  selector: 'app-track-comp',
  templateUrl: './track-comp.component.html',
  styleUrls: ['./track-comp.component.css']
})
export class TrackCompComponent implements OnInit {
  toDoFrm = new FormGroup ({
    eID: new FormControl(),
    name: new FormControl(),
    task: new FormControl(),
    dLine: new FormControl(),
  })
  cat:any
  newSetTasks:Array<any> = []
  public paramID:any
  public paramName:any
  public paramTask:any
  public paramLine:any
  paramsTable:any
  testMyParam:string = ""
  testMSG = ""
  testMSG2 = ""
  
  constructor( private router:Router, private aRoute : ActivatedRoute) {
    
    console.log("constructor runs")
    
   }

  ngOnInit(): void {
    console.log("onInit Runs")
    /* let id = this.aRoute.snapshot.paramMap.get('me')
    let name = this.aRoute.snapshot.paramMap.get('you')
    let task = this.aRoute.snapshot.paramMap.get('task')
    let line = this.aRoute.snapshot.paramMap.get('line')
    this.paramID = id
    this.paramName = name
    this.paramTask = task
    this.paramLine = line */
    this.aRoute.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id')
      let name = params.get('name')
      let task = params.get('task')
      let line = params.get('line')
      let setData = {oID:id,oName:name,oTask:task,oLine:line}
      /* this.newSetTasks.push(id)
      this.newSetTasks.push(name)
      this.newSetTasks.push(task)
      this.newSetTasks.push(line) */
      this.newSetTasks.push(setData)
      console.log(JSON.stringify(this.newSetTasks))
      /* this.paramID = id
      this.paramName = name
      this.paramTask = task
      this.paramLine = line */

    })

    /* this.router.routeReuseStrategy.shouldReuseRoute = () =>{
      return false;
    }; */
  }
  
  
  
  setInfo(){
    
    let toDoTasks = this.toDoFrm.value
    if(toDoTasks.eID !== null ||toDoTasks.name !== null ||toDoTasks.task !== null ||toDoTasks.dLine !== null){
      //this.router.navigate(["tblRoute",{id:22,name:"me",task:"me",line:"numbers"}], {relativeTo: this.aRoute})//toDoTasks.eID,toDoTasks.name,toDoTasks.task,toDoTasks.dLine], {relativeTo: this.aRoute})
      this.router.navigate(['tblRoute',{id:toDoTasks.eID,name:toDoTasks.name,task:toDoTasks.task,line:toDoTasks.dLine}])//toDoTasks.eID,toDoTasks.name,toDoTasks.task,toDoTasks.dLine], {relativeTo: this.aRoute})

      //this.router.navigateByUrl("tblRoute/test")
      this.testMSG = "this loop WORKS !!"
    }else{
      this.testMSG = " this loop buttion did not work"
      console.log("check repeat")
    }
    
    console.log("this is the id after click  "+toDoTasks.eID)
    
  }

  
  disPlayTable():any{

  }
  
}
