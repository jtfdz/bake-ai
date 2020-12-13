import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderPrincipalComponent } from 'src/app/componentes/header-principal/header-principal.component';
import { BotonesIconosComponent } from 'src/app/componentes/botones-iconos/botones-iconos.component';
import { TabsTeoriaComponent } from 'src/app/componentes/tabs-teoria/tabs-teoria.component';
import { BotonesIconosModalComponent } from 'src/app/componentes/botones-iconos-modal/botones-iconos-modal.component';
import { TemasInferioresInicioComponent } from 'src/app/componentes/temas-inferiores-inicio/temas-inferiores-inicio.component';
import { BotonesIconosTemasComponent } from 'src/app/componentes/botones-iconos-temas/botones-iconos-temas.component';
import { HeaderModulosComponent } from 'src/app/componentes/header-modulos/header-modulos.component';
import { TabsTeoriaContentComponent } from 'src/app/componentes/tabs-teoria-content/tabs-teoria-content.component';
import { TemasTitulosComponent } from 'src/app/componentes/temas-titulos/temas-titulos.component';
import { TemasInstruccionesYExaminacionComponent } from 'src/app/componentes/temas-instrucciones-y-examinacion/temas-instrucciones-y-examinacion.component';
import { TemasKanasTablasComponent } from 'src/app/componentes/temas-kanas-tablas/temas-kanas-tablas.component';
import { TemasKanasBotonesComponent } from 'src/app/componentes/temas-kanas-tablas/temas-kanas-botones/temas-kanas-botones.component';


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
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ]
})
export class ComponentesModule { }
