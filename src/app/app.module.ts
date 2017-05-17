import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { headerComponent } from './controllers/header/app.headerComponent';
import { navComponent } from './controllers/nav/app.navComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, headerComponent, navComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
