import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { headerComponent } from './controllers/header/app.headerComponent';
import { navComponent } from './controllers/nav/app.navComponent';

import { homeComponent } from './controllers/home/app.homeComponent';
import { aboutComponent } from './controllers/about/app.aboutComponent';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    {
                      path: 'about',
                      component: aboutComponent
                    },
                    {
                      path: '',
                      component: homeComponent
                    }
                  ])
                ],
  declarations: [ AppComponent, headerComponent, navComponent, homeComponent, aboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
