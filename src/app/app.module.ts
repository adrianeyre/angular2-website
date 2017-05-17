import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { headerComponent } from './controllers/header/app.headerComponent';
import { navComponent } from './controllers/nav/app.navComponent';

import { homeComponent } from './controllers/home/app.homeComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, headerComponent, navComponent, homeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
