import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {EstimateService} from '../../../estimate/estimate.service';

@Component({
  selector: 'app-popup-button',
  templateUrl: './popup-button.component.html',
  styleUrls: ['./popup-button.component.css']
})
export class PopupButtonComponent {

  constructor(private route: Router, private estimatedService: EstimateService) {
  }

  navigateToStepper() {
     setTimeout(() => {
        this.route.navigate([
            '/loader'
        ]).then(() => {
           setTimeout(() => {
             this.route.navigate([
                 '/estimate'
             ]).then(() => console.log('Navigation Done'));
           }, 1000);
        })
     });
  }


}
