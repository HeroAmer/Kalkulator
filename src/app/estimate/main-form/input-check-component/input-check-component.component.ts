import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../../estimate.service';
import {QuestionService} from "../../../home/question.service";

@Component({
  selector: 'app-input-check-component',
  templateUrl: './input-check-component.component.html',
  styleUrls: ['./input-check-component.component.css']
})
export class InputCheckComponentComponent implements OnInit {
  fetchedJson;

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
   this.fetchedJson = this.questionService.getQuestions();
   console.log(this.fetchedJson)
  }
  



}
