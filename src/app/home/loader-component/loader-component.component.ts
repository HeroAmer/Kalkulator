import {Component, OnDestroy, OnInit} from '@angular/core';
import {EstimateService} from '../../estimate/estimate.service';
import {Subscription} from 'rxjs';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.css']
})
export class LoaderComponentComponent implements OnInit, OnDestroy {

  constructor(public questionService: QuestionService) { }

  private questionSubscription: Subscription;

  ngOnInit(): void {
    this.questionService.getQuestions();
    this.questionSubscription = this.questionService.getQuestionsUpdated()
        .subscribe((questions) => {
          this.questionService.infoFetched = questions.questions[0];
          console.log(this.questionService.infoFetched);
        })
  }

  ngOnDestroy(): void {
    this.questionSubscription.unsubscribe();
  }

}
