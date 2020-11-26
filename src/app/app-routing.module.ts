import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PrimerInicioComponent } from './paginas/principales/primer-inicio/primer-inicio.component';
import { FirstSlideComponent } from './paginas/principales/primer-inicio/first-slide/first-slide.component';
import { SecondSlideComponent } from './paginas/principales/primer-inicio/second-slide/second-slide.component';
import { ThirdSlideComponent } from './paginas/principales/primer-inicio/third-slide/third-slide.component';
import { ForthSlideComponent } from './paginas/principales/primer-inicio/forth-slide/forth-slide.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: AppComponent },
  { path: 'primer-inicio', component: PrimerInicioComponent },
  { path: 'primer-inicio-first-slide', component: FirstSlideComponent },
  { path: 'primer-inicio-second-slide', component: SecondSlideComponent },
  { path: 'primer-inicio-third-slide', component: ThirdSlideComponent },
  { path: 'primer-inicio-forth-slide', component: ForthSlideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	useHash: true,
  	anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

