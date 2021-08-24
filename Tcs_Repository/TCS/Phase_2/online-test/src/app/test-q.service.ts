import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormatQ, FormatQA } from './format-q.model';


@Injectable({
  providedIn: 'root'
})
export class TestQService {

  constructor(public http:HttpClient) { }

  takeQuiz ():Observable<FormatQ[]>{
    return this.http.get<FormatQ[]>("/assets/take_test.json");

  }

  getResults():Observable<FormatQA[]>{
    return this.http.get<FormatQA[]>("/assets/test_results.json");
  }

  resultCheck():any {
    
  }

}
