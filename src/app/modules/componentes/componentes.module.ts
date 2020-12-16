import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderPrincipalComponent } from 'src/app/componentes/headers/header-principal/header-principal.component';
import { HeaderModulosComponent } from 'src/app/componentes/headers/header-modulos/header-modulos.component';

import { BotonesIconosComponent } from 'src/app/componentes/botones-iconos/botones-iconos.component';
import { BotonesIconosModalComponent } from 'src/app/componentes/botones-iconos/botones-iconos-modal/botones-iconos-modal.component';

import { TabsTeoriaComponent } from 'src/app/componentes/tabs-teoria/tabs-teoria.component';
import { TabsTeoriaContentComponent } from 'src/app/componentes/tabs-teoria/tabs-teoria-content/tabs-teoria-content.component';

import { GustosPickerComponent } from 'src/app/componentes/gustos-picker/gustos-picker.component';
import { GustosTabsComponent } from 'src/app/componentes/gustos-picker/gustos-tabs/gustos-tabs.component';

import { TemasInferioresInicioComponent } from 'src/app/componentes/temas/temas-inferiores-inicio/temas-inferiores-inicio.component';
import { TemasKanasTablasComponent } from 'src/app/componentes/temas/temas-kanas-tablas/temas-kanas-tablas.component';
import { TemasKanasBotonesComponent } from 'src/app/componentes/temas/temas-kanas-tablas/temas-kanas-botones/temas-kanas-botones.component';
import { TemasTitulosComponent } from 'src/app/componentes/temas/temas-titulos/temas-titulos.component';
import { TemasInstruccionesYExaminacionComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-instrucciones-y-examinacion.component';
import { BotonesIconosTemasComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/botones-iconos-temas/botones-iconos-temas.component';

@NgModule({
  declarations: [
    HeaderPrincipalComponent,
    BotonesIconosComponent,
    TabsTeoriaComponent,
    BotonesIconosModalComponent,
    TabsTeoriaContentComponent,
    TemasInferioresInicioComponent,
    BotonesIconosTemasComponent,
    HeaderModulosComponent,
    TemasTitulosComponent,
    TemasInstruccionesYExaminacionComponent,
    TemasKanasTablasComponent,
    TemasKanasBotonesComponent,
    GustosPickerComponent,
    GustosTabsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    HeaderPrincipalComponent,
    BotonesIconosComponent,
    TabsTeoriaComponent,
    BotonesIconosModalComponent,
    TabsTeoriaContentComponent,
    TemasInferioresInicioComponent,
    BotonesIconosTemasComponent,    
    HeaderModulosComponent,
    TemasTitulosComponent,
    TemasInstruccionesYExaminacionComponent,
    TemasKanasTablasComponent,
    TemasKanasBotonesComponent,
    GustosPickerComponent,
    GustosTabsComponent,
  ]
})
export class ComponentesModule { }
