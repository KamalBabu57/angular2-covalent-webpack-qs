import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CovalentCoreModule} from '@covalent/core';
//import {MaterialModule} from '@angular/material'

@NgModule({
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
