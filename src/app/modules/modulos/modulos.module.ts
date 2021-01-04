import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { BaseComponent } from 'src/app/paginas/modulos/base/base.component';
import { OrigenComponent } from 'src/app/paginas/modulos/origen/origen.component';

import { LunaVwComponent } from 'src/app/paginas/modulos/luna-vw/luna-vw.component';
import { SolAwComponent } from 'src/app/paginas/modulos/sol-aw/sol-aw.component';
import { TierraVComponent } from 'src/app/paginas/modulos/tierra-v/tierra-v.component';
import { AguaVComponent } from 'src/app/paginas/modulos/agua-v/agua-v.component';
import { ArbolVComponent } from 'src/app/paginas/modulos/arbol-v/arbol-v.component';
import { OroWComponent } from 'src/app/paginas/modulos/oro-w/oro-w.component';
import { FuegoAwComponent } from 'src/app/paginas/modulos/fuego-aw/fuego-aw.component';
import { TeoriaModuloComponent } from 'src/app/paginas/modulos/teoria-modulo/teoria-modulo.component';
import { ModulosFinalizacionComponent } from 'src/app/paginas/modulos/modulos-finalizacion/modulos-finalizacion.component';

import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';

@NgModule({
  declarations: [    
    LunaVwComponent,
    BaseComponent,
    OrigenComponent,
    TierraVComponent,
    SolAwComponent,
    AguaVComponent,
    ArbolVComponent,
    OroWComponent,
    FuegoAwComponent,
    TeoriaModuloComponent,
    ModulosFinalizacionComponent,
    ],
  imports: [
    ComponentesModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [    
    LunaVwComponent,
    BaseComponent,
    OrigenComponent,
    TierraVComponent,
    SolAwComponent,
    AguaVComponent,
    ArbolVComponent,
    OroWComponent,
    FuegoAwComponent,
    TeoriaModuloComponent,
    ModulosFinalizacionComponent,
    ]
})
export class ModulosModule { }
