import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-headline-question",
  templateUrl: "./headline-question.component.html",
  styleUrls: ["./headline-question.component.css"],
})
export class HeadlineQuestionComponent implements OnInit {
  counter = 0;

  constructor() {}

  increase() {
    this.counter += 1;
  }
  decrease() {
    this.counter -= 1;
  }

  // headlines = [
  //   {
  //     title: "PLATFORMS",
  //     question: "Choose on which platforms would you like to see your app",
  //   },
  //   {
  //     title: "NUMBER OF SCREENS",
  //     question: "What is approximate number of screens your app will have?",
  //   },
  //   {
  //     title: "SIGN UP AND LOGIN",
  //     question: "Does your app have login or Sign up options?",
  //   },
  //   {
  //     title: "ADMIN FEATURES",
  //     question: "Will you app have admin features for obtaining the app?",
  //   },
  //   {
  //     title: "FEATURES",
  //     question: "What features your app have?",
  //   },
  //   {
  //     title: "OPTIONAL",
  //     question: "Choose if you want some of our additional services",
  //   },
  // ];
  ngOnInit(): void {}
}
