import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDistibutorComponent } from './add-distibutor.component';

const routes: Routes = [{
  path: '',
  component: AddDistibutorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDistibutorRoutingModule {

 }
