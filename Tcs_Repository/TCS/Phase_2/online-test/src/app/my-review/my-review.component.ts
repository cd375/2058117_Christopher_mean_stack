import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-review',
  templateUrl: './my-review.component.html',
  styleUrls: ['./my-review.component.css']
})
export class MyReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //this is an additional feature i do not know if i will get to this
  //this will provide feed back to help get users to do beter on next test
  //get another json file
  // add random advice for review
}
