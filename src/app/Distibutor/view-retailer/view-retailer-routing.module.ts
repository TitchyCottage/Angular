import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRetailerComponent } from './view-retailer.component';

const routes: Routes = [{
  path: '',
  component: ViewRetailerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRetailerRoutingModule { }
