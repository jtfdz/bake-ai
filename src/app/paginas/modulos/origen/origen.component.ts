import { Component, OnInit, Input  } from '@angular/core';
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


  @Input() moduloActivado: string = '';



  constructor(private modulosService: ModulosService) { }


  ngOnInit(): void {
  	
  }


}
