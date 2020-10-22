import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClickMeComponent} from './clickme.component';
import {loopBackComponent} from './loopback.component';
import {littleTour} from './littletour.component'
@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    loopBackComponent,
    littleTour
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
