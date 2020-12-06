import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IniciosComponent } from 'src/app/paginas/principales/inicios/inicios.component';
import { InicioGeneralComponent } from 'src/app/paginas/principales/inicio-general/inicio-general.component';
import { PrimerInicioComponent } from 'src/app/paginas/principales/primer-inicio/primer-inicio.component';
import { FirstSlideComponent } from 'src/app/paginas/principales/primer-inicio/first-slide/first-slide.component';
import { SecondSlideComponent } from 'src/app/paginas/principales/primer-inicio/second-slide/second-slide.component';
import { ThirdSlideComponent } from 'src/app/paginas/principales/primer-inicio/third-slide/third-slide.component';
import { ForthSlideComponent } from 'src/app/paginas/principales/primer-inicio/forth-slide/forth-slide.component';

import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';

@NgModule({
  imports: [ComponentesModule, CommonModule, RouterModule, ScrollToModule, FormsModule, ReactiveFormsModule],
  declarations: [InicioGeneralComponent, IniciosComponent, PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
  exports: [InicioGeneralComponent, IniciosComponent, PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
})

export class IniciosModule { }

