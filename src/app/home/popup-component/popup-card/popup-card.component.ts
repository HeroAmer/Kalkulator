import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-popup-card",
  templateUrl: "./popup-card.component.html",
  styleUrls: ["./popup-card.component.css"],
})
export class PopupCardComponent implements OnInit {
  calculatorTitle = "STARTUP CALCULATOR";
  calculatorSubtitle = "Have You ever wondered how much your idea would cost?";
  isShow: boolean = true;

  closePopup() {
    this.isShow = !this.isShow;
  }

  constructor() {}

  ngOnInit(): void {}
}
