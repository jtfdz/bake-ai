import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { PrimerInicioComponent } from './paginas/principales/primer-inicio/primer-inicio.component';
import { InicioGeneralComponent } from './paginas/principales/inicio-general/inicio-general.component';
import { BaseComponent } from './paginas/modulos/base/base.component';
// import { OrigenComponent } from './paginas/modulos/origen/origen.component';
// import { LunaRwComponent } from '../paginas/modulos/luna-rw/luna-rw.component';
// import { SolAudioComponent } from '../paginas/modulos/sol-audio/sol-audio.component';

import { IniciosComponent } from './paginas/principales/inicios/inicios.component';
import { TeoriaComponent } from './paginas/temas/teoria/teoria.component';
import { HiraganaComponent } from './paginas/temas/hiragana/hiragana.component';
import { KatakanaComponent } from './paginas/temas/katakana/katakana.component';
import { KanjiComponent } from './paginas/temas/kanji/kanji.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IniciosComponent },
  { path: 'primer-inicio', component: PrimerInicioComponent },
  { path: 'inicio-general', component: InicioGeneralComponent },
  { path: 'tema-teoria', component: TeoriaComponent },
  { path: 'tema-hiragana', component: HiraganaComponent },
  { path: 'tema-katakana', component: KatakanaComponent },
  { path: 'tema-kanji', component: KanjiComponent },
  { path: 'examinacion', component: BaseComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	useHash: true,
  	anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

