import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PrimerInicioComponent } from 'src/app/paginas/principales/primer-inicio/primer-inicio.component';
import { FirstSlideComponent } from 'src/app/paginas/principales/primer-inicio/first-slide/first-slide.component';
import { SecondSlideComponent } from 'src/app/paginas/principales/primer-inicio/second-slide/second-slide.component';
import { ThirdSlideComponent } from 'src/app/paginas/principales/primer-inicio/third-slide/third-slide.component';
import { ForthSlideComponent } from 'src/app/paginas/principales/primer-inicio/forth-slide/forth-slide.component';


@NgModule({
  imports: [ CommonModule, RouterModule, ScrollToModule, FormsModule, ReactiveFormsModule],
  declarations: [PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
  exports: [PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
})

export class PrimerInicioModule { }

