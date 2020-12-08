import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IniciosModule } from './modules/principales/inicios.module';
import { ModulosModule } from './modules/modulos/modulos.module';
import { ComponentesModule } from './modules/componentes/componentes.module';
import { TeoriaComponent } from './paginas/temas/teoria/teoria.component';
import { TabsTeoriaContentComponent } from './componentes/tabs-teoria-content/tabs-teoria-content.component';
import { HiraganaComponent } from './paginas/temas/hiragana/hiragana.component';
import { KatakanaComponent } from './paginas/temas/katakana/katakana.component';
import { KanjiComponent } from './paginas/temas/kanji/kanji.component';


@NgModule({
  declarations: [
    AppComponent,
    TeoriaComponent,
    TabsTeoriaContentComponent,
    HiraganaComponent,
    KatakanaComponent,
    KanjiComponent,
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
    ComponentesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
