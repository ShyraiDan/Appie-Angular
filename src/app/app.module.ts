import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WhatDoComponent } from './main/what-do/what-do.component';
import { GetStartedComponent } from './main/get-started/get-started.component';
import { CreativeAppComponent } from './main/creative-app/creative-app.component';
import { DownloadAppComponent } from './main/download-app/download-app.component';
import { LatestBlogComponent } from './main/latest-blog/latest-blog.component';
import { StartProjectComponent } from './main/start-project/start-project.component';
import { CreativeWayComponent } from './main/creative-way/creative-way.component';
import { AdvantagesComponent } from './main/advantages/advantages.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { BurgerComponent } from './header/burger/burger.component';
import { FooterRightComponent } from './shared/footer-right/footer-right.component';
import { WhatDoItemComponent } from './main/what-do/what-do-item/what-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WhatDoComponent,
    GetStartedComponent,
    CreativeAppComponent,
    DownloadAppComponent,
    LatestBlogComponent,
    StartProjectComponent,
    CreativeWayComponent,
    AdvantagesComponent,
    NavigationComponent,
    BurgerComponent,
    FooterRightComponent,
    WhatDoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
