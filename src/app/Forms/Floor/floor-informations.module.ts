import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloorInformationsComponent } from './floor-informations.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FloorInformationsComponent 
  ],
  imports: [
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    NgFor,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports:[
    FloorInformationsComponent
  ]
})
export class FloorInformationsModule { }
