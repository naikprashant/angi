import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent as FrontendNav } from './template/frontend/nav/nav.component';
import { NavComponent as BackendNav } from './template/backend/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FrontendNav,
    BackendNav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
