import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeoriaComponent } from 'src/app/paginas/temas/teoria/teoria.component';
import { HiraganaComponent } from 'src/app/paginas/temas/hiragana/hiragana.component';
import { KatakanaComponent } from 'src/app/paginas/temas/katakana/katakana.component';
import { KanjiComponent } from 'src/app/paginas/temas/kanji/kanji.component';

/** COMPONENTES: **/
import { TemasInferioresInicioComponent } from 'src/app/componentes/temas/temas-inferiores-inicio/temas-inferiores-inicio.component';
import { TemasKanasTablasComponent } from 'src/app/componentes/temas/temas-kanas-tablas/temas-kanas-tablas.component';
import { TemasKanasBotonesComponent } from 'src/app/componentes/temas/temas-kanas-tablas/temas-kanas-botones/temas-kanas-botones.component';
import { TemasTitulosComponent } from 'src/app/componentes/temas/temas-titulos/temas-titulos.component';
import { TemasInstruccionesYExaminacionComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-instrucciones-y-examinacion.component';
import { TemasKanjiTablaComponent } from 'src/app/componentes/temas/temas-kanji-tabla/temas-kanji-tabla.component';
import { TemasTabsTeoriaComponent } from 'src/app/componentes/temas/temas-tabs-teoria/temas-tabs-teoria.component';
import { TemasTabsTeoriaContenidoComponent } from 'src/app/componentes/temas/temas-tabs-teoria/temas-tabs-teoria-contenido/temas-tabs-teoria-contenido.component';
import { TemasDropdownOptionsComponent } from 'src/app/componentes/temas/temas-dropdown-options/temas-dropdown-options.component';
import { BotonesIconosTemasComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/botones-iconos-temas/botones-iconos-temas.component';

import { ModulosModule } from 'src/app/modules/modulos/modulos.module';
import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';

@NgModule({
  declarations: [
  TeoriaComponent, 
  HiraganaComponent, 
  KatakanaComponent, 
  KanjiComponent,
  /** COMPONENTES: **/
  TemasTitulosComponent,
  TemasTabsTeoriaComponent,
  TemasKanjiTablaComponent,
  TemasKanasTablasComponent,
  TemasKanasBotonesComponent,
  BotonesIconosTemasComponent,
  TemasDropdownOptionsComponent,
  TemasInferioresInicioComponent,
  TemasTabsTeoriaContenidoComponent,
  TemasInstruccionesYExaminacionComponent,
  ],

  imports: [
  CommonModule,
  ModulosModule,
	ComponentesModule,
	RouterModule,
  ],

  exports: [
  TeoriaComponent, 
  HiraganaComponent, 
  KatakanaComponent, 
  KanjiComponent,
  /** COMPONENTES: **/
  TemasTitulosComponent,
  TemasTabsTeoriaComponent,
  TemasKanjiTablaComponent,
  TemasKanasTablasComponent,
  TemasKanasBotonesComponent,
  BotonesIconosTemasComponent,
  TemasDropdownOptionsComponent,
  TemasInferioresInicioComponent,
  TemasTabsTeoriaContenidoComponent,
  TemasInstruccionesYExaminacionComponent,
  ]
})
export class TemasModule { }
