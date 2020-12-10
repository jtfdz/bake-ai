import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { BaseComponent } from 'src/app/paginas/modulos/base/base.component';
import { OrigenComponent } from 'src/app/paginas/modulos/origen/origen.component';
import { LunaRwComponent } from 'src/app/paginas/modulos/luna-rw/luna-rw.component';
import { SolAudioComponent } from 'src/app/paginas/modulos/sol-audio/sol-audio.component';
import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';

@NgModule({
  declarations: [    
  	LunaRwComponent,
    BaseComponent,
    SolAudioComponent,
    OrigenComponent,
    ],
  imports: [
    ComponentesModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [    
  	LunaRwComponent,
    BaseComponent,
    SolAudioComponent,
    OrigenComponent
    ]
})
export class ModulosModule { }
