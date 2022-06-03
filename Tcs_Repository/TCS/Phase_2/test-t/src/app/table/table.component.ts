import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized} from '@angular/router';
import { ResultFunc } from 'rxjs/internal/observable/generate';
import { ColTasksService } from '../col-tasks.service';
import { EmpInfo } from '../emp-info.model';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
//import { Observable, of } from 'rxjs';
//import { switchMap } from 'rxjs/operators';
//import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public paramID:any
  paramName?:string = ""
  paramTask?:string = ""
  paramLine?:string = ""
  private objTable:any
  testMyParam:string = ""
  testMSG = "this test"
  testMSG2 = ""
  

  constructor(private aRoute : ActivatedRoute) { 
    /* this.aRoute.data.
    subscribe(data=>{
      console.log("this is data from the url"+ JSON.stringify(data))
      this.paramID = data.tID
      this.paramName = data.tName
      this.paramTask = data.tTask
      this.paramLine = data.tLine
      console.log("this is the param ID in sub "+JSON.stringify(this.paramID))
      console.log("this is the test in sub "+ this.paramID)
    })
    console.log("this is the test out sub "+ this.paramID)
    if (this.paramName){
      this.testMSG2 =this.paramName
    }else{
      this.testMSG2= "this is null"
    
    } */
    
  }

  ngOnInit(): void {
    let id = this.aRoute.snapshot.paramMap.get('id')
    this.paramID = id
    this.aRoute.data.
    subscribe(data=>{
      console.log("this is data from the url"+ JSON.stringify(data))
      if (data instanceof RoutesRecognized){
        this.objTable = data.state.root.data
        /* this.paramID = data.tID
        this.paramName = data.tName
        this.paramTask = data.tTask
        this.paramLine = data.tLine */
        console.log("this is the param ID in sub "+JSON.stringify(this.paramID))
        console.log("this is the test in sub "+ this.paramID)
      }else{
        console.log("sub not working")
      } 
    })
    console.log("this is the test out sub "+ this.paramID)
    if (this.paramName){
      this.testMSG2 =this.paramName
    }else{
      this.testMSG2= "this is null"
    
    }
  }
  

}
