import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ViewProductRoutingModule } from './viewProduct-routing.module';
import {  ViewProductComponent } from './viewProduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  // exports: [
  //   MatTableModule
  // ],
  declarations: [ViewProductComponent]
})
export class ViewProductModule { }
