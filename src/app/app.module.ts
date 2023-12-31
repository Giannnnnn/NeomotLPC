import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloorInformationsModule } from './Forms/Floor/floor-informations.module';
import { TechnicalDrawModule } from './technical-draw/technical-draw.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FloorInformationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TechnicalDrawModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    NgFor,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
