import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuantityRoutingModule } from './add-quantity-routing.module';
import { AddQuantityComponent } from './add-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AddQuantityRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule
  ],
  declarations: [AddQuantityComponent],
  providers: [DatePipe] 
})
export class AddQuantityModule { }
