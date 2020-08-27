/// here are all third party imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';


/// here are our components imports
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupCardComponent } from "./home/popup-component/popup-card/popup-card.component";
import { GifComponent } from "./home/popup-component/gif/gif.component";
import { PopupButtonComponent } from "./home/popup-component/popup-button/popup-button.component";
import { InputCheckComponentComponent } from "./estimate/main-form/input-check-component/input-check-component.component";
import { MainFormComponent } from "./estimate/main-form/main-form.component";
import { HeadlineQuestionComponent } from "./estimate/main-form/headline-question/headline-question.component";
import { PriceContainerComponentComponent } from "./estimate/main-form/price-container-component/price-container-component.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { StepperComponentComponent } from "./estimate/stepper-component/stepper-component.component";
import { EstimateComponent } from "./estimate/estimate.component";
import { HomeButtonComponentComponent } from "./estimate/home-button-component/home-button-component.component";
import { ConfirmationPageComponent } from "./estimate/confirmation-page/confirmation-page.component";
import { HeadlineComponentComponent } from "./estimate/confirmation-page/headline-component/headline-component.component";
import { FooterComponentComponent } from "./estimate/confirmation-page/footer-component/footer-component.component";
import { LoaderComponentComponent } from './home/loader-component/loader-component.component';


@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    PopupButtonComponent,
    PopupCardComponent,
    InputCheckComponentComponent,
    MainFormComponent,
    HeadlineQuestionComponent,
    PriceContainerComponentComponent,
    HomeComponent,
    StepperComponentComponent,
    EstimateComponent,
    HomeButtonComponentComponent,
    ConfirmationPageComponent,
    HeadlineComponentComponent,
    FooterComponentComponent,
    LoaderComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
