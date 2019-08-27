import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ViewDistibutorRoutingModule } from './view-distibutor-routing.module';
import {  ViewDistibutorComponent } from './view-distibutor.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    ViewDistibutorRoutingModule
  ],
  declarations: [ViewDistibutorComponent]
})
export class ViewDistibutorModule { }
