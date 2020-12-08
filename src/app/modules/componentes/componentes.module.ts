import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderPrincipalComponent } from 'src/app/componentes/header-principal/header-principal.component';
import { BotonesIconosComponent } from 'src/app/componentes/botones-iconos/botones-iconos.component';
import { TabsTeoriaComponent } from 'src/app/componentes/tabs-teoria/tabs-teoria.component';
import { BotonesIconosModalComponent } from 'src/app/componentes/botones-iconos-modal/botones-iconos-modal.component';
import { TemasInferioresInicioComponent } from 'src/app/componentes/temas-inferiores-inicio/temas-inferiores-inicio.component';



@NgModule({
  declarations: [
    HeaderPrincipalComponent,
    BotonesIconosComponent,
    TabsTeoriaComponent,
    BotonesIconosModalComponent,
    TemasInferioresInicioComponent,
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
    TemasInferioresInicioComponent,    
  ]
})
export class ComponentesModule { }
