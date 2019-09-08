import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './addProduct-routing.module';
import { AddProductComponent } from './addProduct.component';
// import {TableModule} from 'primeng/table';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule,
    // BrowserAnimationsModule,
    // TableModule
    FormsModule,ReactiveFormsModule,
    MkAlertModule, BoxModule
  ],

  declarations: [AddProductComponent]
})
export class AddProductModule {

 }
