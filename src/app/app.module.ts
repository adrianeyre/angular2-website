import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { headerComponent } from './controllers/header/app.headerComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, headerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
