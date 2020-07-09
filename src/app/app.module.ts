import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
