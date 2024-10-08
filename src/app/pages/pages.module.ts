import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
