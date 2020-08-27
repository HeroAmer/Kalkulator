import { Injectable } from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    infoFetched;
    private jsonQuestions = [];
    private subject = new Subject<any>();

    constructor(private http: HttpClient) {}

    getQuestions() {
        this.http.get<{message: string, json: []}>('http://localhost:3000/api/JSON').subscribe((jsonData) => {
            this.jsonQuestions = jsonData.json;
            console.log(this.jsonQuestions);
            this.subject.next({
                questions: this.jsonQuestions
            });
        });
    }

    getQuestionsUpdated(): Observable<any> {
          return this.subject.asObservable();
    }




}

