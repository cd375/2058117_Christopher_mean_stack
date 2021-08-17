import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../inPro.model';
import { NewUserInfo } from '../project.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkme = ""
  //getHide:any = localStorage.getItem("logBtn")
  varHide:boolean =true //JSON.parse(this.getHide)
  logShow = ""
  msgBtn = ""
  initUsers:any = localStorage.getItem("userObj")
  loginData: Array<Users> = JSON.parse(this.initUsers)|| [];
  loginFrm = new FormGroup ({
    userLog : new FormControl("",[Validators.required]),
    passLog : new FormControl("",[Validators.required])
  })

  msg2 = ""
  test = ""
  constructor(public parseUsers : NewUserInfo) { }

  ngOnInit(): void {
    
  }
  changeStat(){
  
    return this.parseUsers.methShowLog()
  }
 
  loginCon(){
    let serveArray = this.parseUsers.getLocalInfo()
    let newFrm = this.loginFrm.value
    
    for (let i = 0; i < serveArray.length ; i++){
      if (newFrm.userLog == serveArray[i].userName && newFrm.passLog == serveArray[i].passNew ){
        
        
        localStorage.setItem("loginUserName",JSON.stringify(newFrm.userLog))     
       
        this.checkme = "profShow"
        localStorage.setItem("updateStat", JSON.stringify(this.checkme))
        this.msgBtn = "this is a click of btn"
        
        

      }else{
        this.msg2 = "for loop not working"
      }
    }
  }



}
