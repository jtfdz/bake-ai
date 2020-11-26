import { Component, OnInit } from '@angular/core';
import urls from 'src/app/urls.json';
import { PrimerInicioService } from '../primer-inicio.service';

@Component({
  selector: 'app-second-slide',
  templateUrl: './second-slide.component.html',
  styleUrls: ['./second-slide.component.css']
})
export class SecondSlideComponent implements OnInit {

  imagenes: String = urls.secondslide;

  constructor(private primerInicioService: PrimerInicioService) { }

  ngOnInit(): void {}

  public activar() {
    this.primerInicioService.setShow3();
   }

}
