import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ViewProductRoutingModule } from './viewProduct-routing.module';
import {  ViewProductComponent } from './viewProduct.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    ViewProductRoutingModule
  ],
  declarations: [ViewProductComponent]
})
export class ViewProductModule { }
