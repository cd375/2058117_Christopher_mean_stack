import { Component, OnInit } from '@angular/core';
import { Users } from '../inPro.model';
import { NewUserInfo } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  regForm = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    userName:new FormControl("",[Validators.required]),
    passNew:new FormControl("",[Validators.required]),
    passCon:new FormControl("",[Validators.required])
  })
  checkme = ""
  msgBtn = ""
  msg:string = ""
  localData:Array<Users> = []
  regShow = ""
  
  varHide:boolean = true
  constructor(public user:NewUserInfo) { }

  ngOnInit(): void {
    
    console.log(" page loads reg")

  }

  changeStat(){
    return this.user.methShowReg()
  }

  collectLocalInfo (){
    let newReg = this.regForm.value
    if(newReg.firstName !== "" && newReg.lastName !== "" && newReg.userName !== "" && newReg.passNew !== "" && newReg.passCon !== "") { 
      if (newReg.passCon == newReg.passNew ){
        
        this.localData.push(newReg)
        localStorage.setItem("userObj",JSON.stringify(this.localData));
        this.msg = "you can now log in "
        console.log("this works for now")
        console.log("this is fistN if passwords are matching" + newReg.firstName)

      }else{
        this.msg = "pass no match"
      }
    }else{
      this.msg = "no input"
      console.log("this means the first name is null")
    } 
    this.regForm.reset();
  }
  

  loginBtn () {
    if(localStorage.getItem("updateStat")){
      
      this.checkme = "logShow"
      localStorage.setItem("updateStat", JSON.stringify(this.checkme))

     
      this.msgBtn = "this is a click of btn"
    }
    
  }

}
