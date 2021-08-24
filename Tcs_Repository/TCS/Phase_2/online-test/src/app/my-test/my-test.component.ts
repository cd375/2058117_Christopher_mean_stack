import { Component, OnInit,OnDestroy } from '@angular/core';
import { TestQService } from '../test-q.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit , OnDestroy {
  //this is the questions
  myQuiz = this.fBuild.group({
    q1Ans:[''], 
    q2Ans:[''],
    q3Ans:[''] ,
    q4Ans:[''],
    q5Ans:[''] ,
    q6Ans:[''] ,
    q7Ans:[''] ,
    q8Ans:[''] ,
    q9Ans:[''] ,
    q10Ans:[''] 
  })
  
  score:number = 0;
  disTestArray:Array<any> = []
 
  

  constructor(public testQ:TestQService, public router:Router, public fBuild :FormBuilder) { }

  ngOnInit(): void {
    this.testQ.takeQuiz().subscribe(result =>{
      console.log(result)
        this.disTestArray = result   
        console.log("this is the test array!!!   "+JSON.stringify(this.disTestArray))
    
    });
    

  }

  ngOnDestroy(){
  }
  

  // need make radial button check answer when test is submited and make sure
  //cannot submit befor answering all questions
  submitQuiz(){
    //get valuse from each answer and match them to correct answer
    let quizForm = this.myQuiz.value
     

    // if wrong do nothing 
    if (quizForm.q1Ans == "Q1D" ){
      this.score = this.score + 10
    }
    if (quizForm.q2Ans == "Q2D" ){
      this.score = this.score + 10
    }

    if (quizForm.q3Ans == "Q3C" ){
      this.score = this.score + 10
    }
    if (quizForm.q4Ans == "Q4A" ){
      this.score = this.score + 10
    }
    if (quizForm.q5Ans == "Q5C" ){
      this.score = this.score + 10
    }
    if (quizForm.q6Ans == "Q6D" ){
      this.score = this.score + 10
    }
    if (quizForm.q7Ans == "Q7C" ){
      this.score = this.score + 10
    }
    if (quizForm.q8Ans == "Q8A" ){
      this.score = this.score + 10
    }
    if (quizForm.q9Ans == "Q9B" ){
      this.score = this.score + 10
    }
    if (quizForm.q10Ans == "Q10C" ){
      this.score = this.score + 10
    }
   
    console.log("score  "+this.score)
    this.router.navigate(['/result',{score:this.score}])
    
  }
  // after submit button is pressed go to results page
}
