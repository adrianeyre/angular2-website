import { Component } from '@angular/core';

import { headerComponent } from './controllers/header/app.headerComponent';
import { navComponent } from './controllers/nav/app.navComponent';

import { homeComponent } from './controllers/home/app.homeComponent';
import { aboutComponent } from './controllers/about/app.aboutComponent';

@Component({
  selector: 'my-app',
  templateUrl: './views/main/main.html',
})
export class AppComponent { }
