import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrimerInicioComponent } from './primer-inicio.component';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { SecondSlideComponent } from './second-slide/second-slide.component';
import { ThirdSlideComponent } from './third-slide/third-slide.component';
import { ForthSlideComponent } from './forth-slide/forth-slide.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ScrollToModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
  exports: [PrimerInicioComponent, FirstSlideComponent, SecondSlideComponent, ThirdSlideComponent, ForthSlideComponent],
})
export class PrimerInicioModule { }

