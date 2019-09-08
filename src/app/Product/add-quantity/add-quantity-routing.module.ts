import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuantityComponent } from './add-quantity.component';

const routes: Routes = [{
  path: '',
  component: AddQuantityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddQuantityRoutingModule { }
