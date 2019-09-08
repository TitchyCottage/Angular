import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRetailerComponent } from './add-retailer.component';

const routes: Routes = [{
  path: '',
  component: AddRetailerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRetailerRoutingModule {

 }
