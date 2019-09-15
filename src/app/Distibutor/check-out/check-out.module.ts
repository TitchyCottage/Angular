import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule
  ],
  declarations: [CheckOutComponent]
})
export class CheckOutModule { }
