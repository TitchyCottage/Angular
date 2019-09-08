import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ViewRetailerRoutingModule } from './view-retailer-routing.module';
import {  ViewRetailerComponent } from './view-retailer.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    ViewRetailerRoutingModule
  ],
  declarations: [ViewRetailerComponent]
})
export class ViewRetailerModule { }
