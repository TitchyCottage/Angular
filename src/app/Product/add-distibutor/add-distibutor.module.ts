import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  AddDistibutorRoutingModule } from './add-distibutor-routing.module';
import {  AddDistibutorComponent } from './add-distibutor.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';
@NgModule({
  imports: [
    CommonModule,
    AddDistibutorRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule 
  ],
  declarations: [AddDistibutorComponent]
})
export class AddDistibutorModule { }
