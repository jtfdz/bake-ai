import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { BaseComponent } from 'src/app/paginas/modulos/base/base.component';
import { OrigenComponent } from 'src/app/paginas/modulos/origen/origen.component';

import { LunaRwComponent } from 'src/app/paginas/modulos/luna-rw/luna-rw.component';
import { SolAwComponent } from 'src/app/paginas/modulos/sol-aw/sol-aw.component';
import { TierraVComponent } from 'src/app/paginas/modulos/tierra-v/tierra-v.component';
import { AguaVComponent } from 'src/app/paginas/modulos/agua-v/agua-v.component';
import { ArbolVrComponent } from 'src/app/paginas/modulos/arbol-vr/arbol-vr.component';
import { OroArComponent } from 'src/app/paginas/modulos/oro-ar/oro-ar.component';
import { FuegoAwComponent } from 'src/app/paginas/modulos/fuego-aw/fuego-aw.component';


import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';

@NgModule({
  declarations: [    
  	LunaRwComponent,
    BaseComponent,
    OrigenComponent,
    TierraVComponent,
    SolAwComponent,
    AguaVComponent,
    ArbolVrComponent,
    OroArComponent,
    FuegoAwComponent,
    ],
  imports: [
    ComponentesModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [    
  	LunaRwComponent,
    BaseComponent,
    OrigenComponent,
    TierraVComponent,
    SolAwComponent,
    AguaVComponent,
    ArbolVrComponent,
    OroArComponent,
    FuegoAwComponent,
    ]
})
export class ModulosModule { }
