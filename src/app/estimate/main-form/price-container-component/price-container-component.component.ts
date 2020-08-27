import {Component, OnDestroy } from '@angular/core';
import {EstimateService} from "../../estimate.service";
import {Subscription} from "rxjs";
import {EstimatedTimeAndPrice} from "../../estimatedTimeAndPrice";

@Component({
  selector: 'app-price-container-component',
  templateUrl: './price-container-component.component.html',
  styleUrls: ['./price-container-component.component.css']
})
export class PriceContainerComponentComponent implements OnDestroy {
    /// subscription
    subscription: Subscription;

  estimateText = 'Estimated Time:';
  priceText = 'Estimated Price:';
  days = 0;

   estimatedTP: EstimatedTimeAndPrice = {
     price: 0,
     time: 0,
   };

  constructor(public estimateService: EstimateService) {
    this.subscription = this.estimateService.getEstimatedTimeAndPrice().subscribe((priceAndTime) => {
       this.estimatedTP.time = Math.floor(priceAndTime.time);
       this.estimatedTP.price = priceAndTime.price;
       this.days = Math.floor(this.estimatedTP.time / 8);
    });
  }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
