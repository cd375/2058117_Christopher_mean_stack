import { Component, OnInit } from '@angular/core';
import { TestQService } from '../test-q.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.css']
})
export class MyResultComponent implements OnInit {
  disTestArray:Array<any> = []
  score:any
  scMsg:string = ""


  constructor(public testQ:TestQService, public aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.testQ.getResults().subscribe(result =>{
      console.log(result)
        this.disTestArray = result   
        console.log("this is the test array!!!   "+JSON.stringify(this.disTestArray))
    
    });

    this.aRoute.paramMap.subscribe((params: ParamMap)=>{
      this.score = params.get('score')
    })
    console.log("score" + this.score)

    if(this.score < 70){
      this.scMsg = " You Failed look at correct answers below"
    }else{
      this.scMsg = " You Passed"

    }

    

  }
  //this will take another json file and it will add the nubmer of mateches to correct
  //ansers and give score
  //use switch case or long if stament to display pass/ fail result
  showScore():any{
    
    //return this.score

  }
  // show each question with the right answer highlighted
}
