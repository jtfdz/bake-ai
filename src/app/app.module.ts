import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IniciosModule } from './modules/inicios/inicios.module';
import { ModulosModule } from './modules/modulos/modulos.module';
import { TemasModule } from './modules/temas/temas.module';
import { ComponentesModule } from './modules/componentes/componentes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ScrollToModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IniciosModule,
    ModulosModule,
    TemasModule,
    ComponentesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
