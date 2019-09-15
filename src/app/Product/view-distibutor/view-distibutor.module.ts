import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ViewDistibutorRoutingModule } from './view-distibutor-routing.module';
import {  ViewDistibutorComponent } from './view-distibutor.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';
@NgModule({
  imports: [
    CommonModule,
    ViewDistibutorRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule
  ],
  declarations: [ViewDistibutorComponent]
})
export class ViewDistibutorModule { }
