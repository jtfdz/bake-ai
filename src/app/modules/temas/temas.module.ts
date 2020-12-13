import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeoriaComponent } from 'src/app/paginas/temas/teoria/teoria.component';
import { HiraganaComponent } from 'src/app/paginas/temas/hiragana/hiragana.component';
import { KatakanaComponent } from 'src/app/paginas/temas/katakana/katakana.component';
import { KanjiComponent } from 'src/app/paginas/temas/kanji/kanji.component';

import { ModulosModule } from 'src/app/modules/modulos/modulos.module';
import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';


@NgModule({
  declarations: [
  TeoriaComponent, 
  HiraganaComponent, 
  KatakanaComponent, 
  KanjiComponent
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
  KanjiComponent
  ]
})
export class TemasModule { }
