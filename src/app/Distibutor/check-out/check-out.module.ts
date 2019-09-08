import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';

@NgModule({
  imports: [
    CommonModule,
    CheckOutRoutingModule
  ],
  declarations: [CheckOutComponent]
})
export class CheckOutModule { }
