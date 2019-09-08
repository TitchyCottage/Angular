import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  AddRetailerRoutingModule } from './add-retailer-routing.module';
import {  AddRetailerComponent } from './add-retailer.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';
@NgModule({
  imports: [
    CommonModule,
    AddRetailerRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule 
  ],
  declarations: [AddRetailerComponent]
})
export class AddRetailerModule { }
