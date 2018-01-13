import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing.module";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NaveenComponent } from './naveen/naveen.component';
import { VinayComponent } from './vinay/vinay.component';
import { SriComponent } from './sri/sri.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NaveenComponent,
    VinayComponent,
    SriComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
