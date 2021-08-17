import { Component, OnInit } from '@angular/core';
import { Users } from '../inPro.model';
import { NewUserInfo } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  msgLogBtn = ""
  msgRegBtn = ""
  test = ""
  constructor() { }

  ngOnInit(): void {
  }

  showRegPage(){
      this.test = "regShow"
      localStorage.setItem("updateStat", JSON.stringify(this.test))

      this.msgRegBtn = "this is a click of btn"
  }
  showLoginPage(){
    this.test = "logShow"
    localStorage.setItem("updateStat", JSON.stringify(this.test))
    this.msgLogBtn = "this is a click of btn"
  }
}
