import { Component, OnInit } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
import { RouterOutlet } from '@angular/router';
import { slider, fader } from 'src/assets/js-ts/route-animation';


@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css'],
  animations: [ slider ]
})
export class OrigenComponent implements OnInit {

	secuencia_modulos: number[] = [1,2,1,2,2,3,1,4,1,2];
	luna: boolean = false;
	sol: boolean = true;




  constructor(private modulosService: ModulosService) { }

  // prepareRoute(outlet: RouterOutlet){
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  // }




  ngOnInit(): void {
  	
  }


}
