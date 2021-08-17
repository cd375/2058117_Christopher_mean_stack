import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users, Contacts } from '../inPro.model';
import { NewUserInfo} from '../project.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  checkme = ""
  testMsg = ""
   getTable:any = localStorage.getItem("contactObj")
   //startTable:any = JSON.parse(this.getTable)
  contactArray:Array<Contacts> = JSON.parse(this.getTable) || []
  tableArray : Array<Contacts> = []
  getHide:any = localStorage.getItem("profBtn")
  varHide:boolean = JSON.parse(this.getHide)
  msgBtn = ""
  profShow = ""
  profFrm = new FormGroup ({
    conName: new FormControl ("",[Validators.required]),
    conPhone: new FormControl ("", [Validators.required])
  })
  constructor(public disInfo : NewUserInfo) { 
    this.tableArray = this.disInfo.getContactInfo()
  }

  ngOnInit(): void {
    

  }
  toggleTable(){
    if(this.varHide){
      this.varHide = false
    }else{
      this.varHide = true
    }
  }
  changeStat(){
    return this.disInfo.methShowProf()
  }
// display users name
  showMyName(){
    return this.disInfo.getDisplayUserName()
  }
// put contact and phone number in local repository
  setContact(){
    let newProf = this.profFrm.value
    if (newProf.conName !== "" && newProf.conPhone !== ""){
      
      this.contactArray.push(newProf)
      localStorage.setItem("contactObj",JSON.stringify(this.contactArray))
      this.testMsg = "this is working"
    }else{
      this.testMsg = "this is not working"
    }

  }

  showMyContacts(){
    
    return this.disInfo.getContactInfo()

  }
  logOutBtn () {
    
    this.checkme = "logShow"
    localStorage.setItem("updateStat",JSON.stringify(this.checkme))

    
    this.msgBtn = "this is a click of btn"
  }
}
