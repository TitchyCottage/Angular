import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpSetHeaders } from '../app/interceptors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule as MkAlertModule, BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    FormsModule,ReactiveFormsModule,
    MkAlertModule,
    BoxModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpSetHeaders, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
