import { Component, OnInit } from '@angular/core';
import { PrimerInicioService } from '../primer-inicio.service';
declare const openTab: any;
import urls from 'src/app/urls.json';

@Component({
  selector: 'app-third-slide',
  templateUrl: './third-slide.component.html',
  styleUrls: ['./third-slide.component.css']
})
export class ThirdSlideComponent implements OnInit {

  imagenes: String = urls.thirdslide;

  constructor(private primerInicioService: PrimerInicioService) { }

  ngOnInit(): void {
  	
  }

  public activar() {
    this.primerInicioService.setShow4();
   }

	ngAfterViewInit(): void {
	}



}
