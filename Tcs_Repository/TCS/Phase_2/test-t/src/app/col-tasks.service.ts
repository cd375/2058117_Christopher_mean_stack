import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import {TrackCompComponent} from './track-comp/track-comp.component';
import { EmpInfo } from './emp-info.model';

@Injectable({
  providedIn: 'root'
})
export class ColTasksService {
  id?:any = ""
  constructor(public router: Router){
    
  } //public router:Router) { }

 /*  postRouteData():Observable<EmpInfo[]>{
    //return this.http.get<EmpInfo[]>("/assets/infoJson.json")
    return 
    
  } */
}
