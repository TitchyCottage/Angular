import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckInComponent } from './check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';
@NgModule({
  imports: [
    CommonModule,
    CheckInRoutingModule,
    FormsModule, ReactiveFormsModule,
    MkAlertModule, BoxModule
  ],
  declarations: [CheckInComponent]
})
export class CheckInModule { }
