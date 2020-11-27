import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PrimerInicioModule } from './paginas/principales/primer-inicio/primer-inicio.module';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    PrimerInicioModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
