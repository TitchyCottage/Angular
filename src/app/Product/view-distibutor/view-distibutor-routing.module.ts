import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDistibutorComponent } from './view-distibutor.component';

const routes: Routes = [{
  path: '',
  component: ViewDistibutorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDistibutorRoutingModule { }
