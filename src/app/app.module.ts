import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { APP_ROUTING } from './app.routes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CamiloComponent } from './components/camilo/camilo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HerramientasService } from './service/herramientas.service'; //<<<<<<<<<<<--------- importando el servicio


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CamiloComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING  
  ],
  providers: [HerramientasService], //<<<<<<<<<<<--------- importando el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
