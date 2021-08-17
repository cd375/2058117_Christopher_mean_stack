import { Injectable } from "@angular/core";
import { Users } from "./inPro.model";
import { Observable } from "rxjs";

@Injectable()
export class NewUserInfo {
    msgReg:string = ""
    msgLogin:string = ""
    msgLogOut:string = ""
    varHide:boolean = true
    constructor(){

    }
    getLocalInfo ():any{
        
        if(localStorage.getItem("userObj")){

            
            let getUsers:any = localStorage.getItem("userObj");

         
            const userJson:any = JSON.parse(getUsers)
            
            
            return userJson

        }else{
            return "not working"
        }
    }
    getDisplayUserName():Observable<Users>{
        let getU:any = localStorage.getItem("loginUserName") 
        const disU:any = JSON.parse(getU)
        return disU
    }

    getContactInfo ():any {
        let getCon:any = localStorage.getItem("contactObj")
        const disCon:any = JSON.parse(getCon)
        return disCon
    }
    initMyReg(){
        localStorage.setItem("updateStat","regShow")
    }
    
    methShowReg():boolean{
        
        let getUpdate:any = localStorage.getItem("updateStat")
        let parseUp = JSON.parse(getUpdate)
        console.log("this is parseUp" + parseUp)
        if(parseUp == "logShow"|| parseUp == "profShow"){
            this.varHide =false
           
        }else if(parseUp == "regShow"){
            this.varHide = true
            
            
        }
        return this.varHide 
    }
    methShowLog():boolean{
        let getUpdate:any = localStorage.getItem("updateStat")
        let parseUp = JSON.parse(getUpdate)
        console.log("this is parseUp" + parseUp)
         if(parseUp == "regShow"|| parseUp == "profShow"){
          this.varHide =false
         
        }else if(parseUp == "logShow"){
          this.varHide = true
          
        } 
        return this.varHide

    }
    methShowProf():boolean {
        let getUpdate:any = localStorage.getItem("updateStat")
        let parseUp = JSON.parse(getUpdate)
        console.log("this is parseUp" + parseUp)
        if(parseUp == "logShow"|| parseUp == "regShow"){
        this.varHide =false
        
        }else if(parseUp == "profShow"){
        this.varHide = true
        
        } 
        return this.varHide
    }
}