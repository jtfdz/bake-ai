import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PrimerInicioModule } from './modules/principales/primer-inicio.module';
import { ModulosModule } from './modules/modulos/modulos.module';
import { InicioGeneralComponent } from './paginas/principales/inicio-general/inicio-general.component';
import { IniciosComponent } from './paginas/principales/inicios/inicios.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioGeneralComponent,
    IniciosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ScrollToModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimerInicioModule,
    ModulosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
