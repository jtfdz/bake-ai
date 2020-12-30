import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
import { TemasKanjiTablaComponent } from 'src/app/componentes/temas/temas-kanji-tabla/temas-kanji-tabla.component';
import { TemasModulosTitulosComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-modulos-titulos/temas-modulos-titulos.component';
import { TemasModulosSubtitulosComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-modulos-subtitulos/temas-modulos-subtitulos.component';

import { TemasDropdownOptionsComponent } from 'src/app/componentes/temas/temas-dropdown-options/temas-dropdown-options.component';
import { TresImagenesPrimerInicioComponent } from 'src/app/componentes/imagenes/tres-imagenes-primer-inicio/tres-imagenes-primer-inicio.component';
import { BaseImagenPrimerInicioComponent } from 'src/app/componentes/imagenes/tres-imagenes-primer-inicio/base-imagen-primer-inicio/base-imagen-primer-inicio.component';
import { ImagenFigureComponent } from 'src/app/componentes/imagenes/imagen-figure/imagen-figure.component';
import { ImagenFotoComponent } from 'src/app/componentes/imagenes/imagen-foto/imagen-foto.component';

import { FirstSlideDropdownContentComponent } from 'src/app/componentes/especificos/first-slide-dropdown-content/first-slide-dropdown-content.component';
import { SecondSlideVarwComponent } from 'src/app/componentes/especificos/second-slide-varw/second-slide-varw.component';
import { InstruccionesSwitchComponent } from 'src/app/componentes/especificos/instrucciones-switch/instrucciones-switch.component';
import { InputUsuarioNombreComponent } from 'src/app/componentes/especificos/input-usuario-nombre/input-usuario-nombre.component';

import { BotonSiguientePrimerInicioComponent } from 'src/app/componentes/botones/boton-siguiente-primer-inicio/boton-siguiente-primer-inicio.component';
import { BotonAnteriorPrimerInicioComponent } from 'src/app/componentes/botones/boton-anterior-primer-inicio/boton-anterior-primer-inicio.component';
import { BotonesModulosSiguienteAyudaComponent } from 'src/app/componentes/botones/botones-modulos-siguiente-ayuda/botones-modulos-siguiente-ayuda.component';
import { FixedCornerComponent } from 'src/app/componentes/botones/fixed-corner/fixed-corner.component';


import { ContenidoInstruccionesTablasComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-tablas/contenido-instrucciones-tablas.component';
import { ContenidoInstruccionesSolComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-sol/contenido-instrucciones-sol.component';
import { ContenidoInstruccionesAguaComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-agua/contenido-instrucciones-agua.component';
import { ContenidoInstruccionesTierraComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-tierra/contenido-instrucciones-tierra.component';
import { ContenidoInstruccionesFuegoComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-fuego/contenido-instrucciones-fuego.component';
import { ContenidoInstruccionesLunaComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-luna/contenido-instrucciones-luna.component';
import { ContenidoInstruccionesOroComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-oro/contenido-instrucciones-oro.component';
import { ContenidoInstruccionesArbolComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-arbol/contenido-instrucciones-arbol.component';
import { ContenidoInstruccionesExaminacionComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-examinacion/contenido-instrucciones-examinacion.component';


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
    TemasModulosTitulosComponent,
    TemasModulosSubtitulosComponent,
    GustosPickerComponent,
    GustosTabsComponent,
    TemasKanjiTablaComponent,
    TemasDropdownOptionsComponent,
    TresImagenesPrimerInicioComponent,
    BaseImagenPrimerInicioComponent,
    FirstSlideDropdownContentComponent,
    BotonSiguientePrimerInicioComponent,
    BotonAnteriorPrimerInicioComponent,
    ImagenFigureComponent,
    SecondSlideVarwComponent,
    ImagenFotoComponent,   
    ContenidoInstruccionesTablasComponent,
    ContenidoInstruccionesSolComponent,
    ContenidoInstruccionesAguaComponent,
    ContenidoInstruccionesTierraComponent,
    ContenidoInstruccionesFuegoComponent,
    ContenidoInstruccionesLunaComponent,
    ContenidoInstruccionesOroComponent,
    ContenidoInstruccionesArbolComponent,
    ContenidoInstruccionesExaminacionComponent,
    BotonesModulosSiguienteAyudaComponent,
    InstruccionesSwitchComponent,
    InputUsuarioNombreComponent,
    FixedCornerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollToModule
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
    TemasKanjiTablaComponent,
    TemasDropdownOptionsComponent,
    TemasModulosTitulosComponent,
    TemasModulosSubtitulosComponent,
    TresImagenesPrimerInicioComponent,
    BaseImagenPrimerInicioComponent,
    FirstSlideDropdownContentComponent,
    BotonSiguientePrimerInicioComponent,
    BotonAnteriorPrimerInicioComponent,
    ImagenFigureComponent,
    SecondSlideVarwComponent,
    ImagenFotoComponent,  
    ContenidoInstruccionesTablasComponent,
    ContenidoInstruccionesSolComponent,
    ContenidoInstruccionesAguaComponent,
    ContenidoInstruccionesTierraComponent,
    ContenidoInstruccionesFuegoComponent,
    ContenidoInstruccionesLunaComponent,
    ContenidoInstruccionesOroComponent,
    ContenidoInstruccionesArbolComponent,  
    ContenidoInstruccionesExaminacionComponent,
    BotonesModulosSiguienteAyudaComponent,
    InstruccionesSwitchComponent,
    InputUsuarioNombreComponent,
    FixedCornerComponent,
  ]
})
export class ComponentesModule { }
