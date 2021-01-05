import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ChartsModule } from 'ng2-charts';

import { HeaderPrincipalComponent } from 'src/app/componentes/headers/header-principal/header-principal.component';
import { HeaderModulosComponent } from 'src/app/componentes/headers/header-modulos/header-modulos.component';

import { BotonesIconosComponent } from 'src/app/componentes/botones/botones-iconos/botones-iconos.component';
import { BotonesIconosModalComponent } from 'src/app/componentes/botones/botones-iconos/botones-iconos-modal/botones-iconos-modal.component';
import { ModalContenidoAplicacionComponent } from 'src/app/componentes/botones/botones-iconos/modal-contenido-aplicacion/modal-contenido-aplicacion.component';
import { ModalContenidoEstadisticasComponent } from 'src/app/componentes/botones/botones-iconos/modal-contenido-estadisticas/modal-contenido-estadisticas.component';
import { ModalContenidoConfiguracionComponent } from 'src/app/componentes/botones/botones-iconos/modal-contenido-configuracion/modal-contenido-configuracion.component';

import { GustosPickerComponent } from 'src/app/componentes/especificos/gustos-picker/gustos-picker.component';
import { GustosTabsComponent } from 'src/app/componentes/especificos/gustos-picker/gustos-tabs/gustos-tabs.component';

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
import { BotonConSpinnerComponent } from 'src/app/componentes/botones/boton-con-spinner/boton-con-spinner.component';

import { ContenidoInstruccionesTablasComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-tablas/contenido-instrucciones-tablas.component';
import { ContenidoInstruccionesExaminacionComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/contenido/contenido-instrucciones-examinacion/contenido-instrucciones-examinacion.component';
import { TemasModulosTitulosComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-modulos-titulos/temas-modulos-titulos.component';
import { TemasModulosSubtitulosComponent } from 'src/app/componentes/temas/temas-instrucciones-y-examinacion/temas-modulos-subtitulos/temas-modulos-subtitulos.component';

import { SpinnerPulsoRojoComponent } from 'src/app/componentes/spinners/spinner-pulso-rojo/spinner-pulso-rojo.component';
import { AvisoAudioCargandoComponent } from 'src/app/componentes/spinners/aviso-audio-cargando/aviso-audio-cargando.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { TemasModule } from 'src/app/modules/temas/temas.module';

@NgModule({
  declarations: [
    HeaderPrincipalComponent,
    BotonesIconosComponent,
    BotonesIconosModalComponent,
    HeaderModulosComponent,
    GustosPickerComponent,
    GustosTabsComponent,
    TresImagenesPrimerInicioComponent,
    BaseImagenPrimerInicioComponent,
    FirstSlideDropdownContentComponent,
    BotonSiguientePrimerInicioComponent,
    BotonAnteriorPrimerInicioComponent,
    ImagenFigureComponent,
    SecondSlideVarwComponent,
    ImagenFotoComponent,   
    BotonesModulosSiguienteAyudaComponent,
    InstruccionesSwitchComponent,
    InputUsuarioNombreComponent,
    FixedCornerComponent,
    ModalContenidoAplicacionComponent,
    ModalContenidoEstadisticasComponent,
    ModalContenidoConfiguracionComponent,
    ContenidoInstruccionesTablasComponent,
    ContenidoInstruccionesExaminacionComponent,
    TemasModulosTitulosComponent,
    TemasModulosSubtitulosComponent,
    SpinnerPulsoRojoComponent,
    BotonConSpinnerComponent,
    AvisoAudioCargandoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollToModule,
    ChartsModule,
    NgxSpinnerModule,
  ],
  exports: [
    HeaderPrincipalComponent,
    BotonesIconosComponent,
    BotonesIconosModalComponent,
    HeaderModulosComponent,
    GustosPickerComponent,
    GustosTabsComponent,
    TresImagenesPrimerInicioComponent,
    BaseImagenPrimerInicioComponent,
    FirstSlideDropdownContentComponent,
    BotonSiguientePrimerInicioComponent,
    BotonAnteriorPrimerInicioComponent,
    ImagenFigureComponent,
    SecondSlideVarwComponent,
    ImagenFotoComponent,   
    BotonesModulosSiguienteAyudaComponent,
    InstruccionesSwitchComponent,
    InputUsuarioNombreComponent,
    FixedCornerComponent,
    ModalContenidoAplicacionComponent,
    ModalContenidoEstadisticasComponent,
    ModalContenidoConfiguracionComponent,
    ContenidoInstruccionesTablasComponent,
    ContenidoInstruccionesExaminacionComponent,
    TemasModulosTitulosComponent,
    TemasModulosSubtitulosComponent,
    SpinnerPulsoRojoComponent,
    BotonConSpinnerComponent,
    AvisoAudioCargandoComponent,
  ]
})
export class ComponentesModule { }
