import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Questao01Component } from './questao01/questao01.component';
import { Questao03Component } from './questao03/questao03.component';
import { Questao04Component } from './questao04/questao04.component';

@NgModule({
  declarations: [
    AppComponent,
    Questao01Component,
    Questao03Component,
    Questao04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
