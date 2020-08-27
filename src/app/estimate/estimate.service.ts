import {Injectable, OnInit} from '@angular/core';
import {EstimatedTimeAndPrice} from "./estimatedTimeAndPrice";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class EstimateService {


    infoFetched;
    finalCoefficient = 0;

  estimatedTimeAndPrice: EstimatedTimeAndPrice = {
    price: 0,
    time: 0,
  }

  private subject = new Subject<any>();


  getEstimatedTimeAndPrice(): Observable<any> {
     return  this.subject.asObservable();
  }

    sendEstimatedTimeAndPrice(event, price: number, time: number, radio: boolean, num: number, pageID: number, pages:any, i:number, coefficient: number) {
        if(event.target.checked) {
            if(coefficient) {
                 this.finalCoefficient += coefficient;
                 console.log(this.finalCoefficient);
            }
            if(!coefficient) {
                let priceCoefficient = this.finalCoefficient * price;
                let timeCoefficient = this.finalCoefficient * time;
                console.log(this.finalCoefficient);
                this.estimatedTimeAndPrice.price += priceCoefficient;
                this.estimatedTimeAndPrice.time += timeCoefficient;
                console.log('Price: ' + this.estimatedTimeAndPrice.price.toString());
                console.log('Time: ' + this.estimatedTimeAndPrice.time.toString());
            }
        }  else {
            if(coefficient) {
                this.finalCoefficient -= coefficient;
                console.log(this.finalCoefficient);
            }
            if(!coefficient) {
                let priceCoefficient = this.finalCoefficient * price;
                let timeCoefficient = this.finalCoefficient * time;
                this.estimatedTimeAndPrice.price -= priceCoefficient;
                this.estimatedTimeAndPrice.time  -= timeCoefficient;
                console.log('Price: ' + this.estimatedTimeAndPrice.price.toString());
                console.log('Time: ' + this.estimatedTimeAndPrice.time.toString());
            }
        }
        this.subject.next({
          price: this.estimatedTimeAndPrice.price,
          time: this.estimatedTimeAndPrice.time,
        });
  }
}



