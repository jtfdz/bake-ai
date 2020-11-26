import { Component, OnInit } from '@angular/core';
import urls from 'src/app/urls.json';
import { PrimerInicioService } from '../primer-inicio.service';


@Component({
  selector: 'app-first-slide',
  templateUrl: './first-slide.component.html',
  styleUrls: ['./first-slide.component.css']
})
export class FirstSlideComponent implements OnInit {

	imagenes: String = urls.firstslide;


  constructor(private primerInicioService: PrimerInicioService) { }

  ngOnInit(): void {
  }

   public activar() {
    this.primerInicioService.setShow2();
   }

}
