import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-temas-inferiores-inicio',
  templateUrl: './temas-inferiores-inicio.component.html',
  styleUrls: ['./temas-inferiores-inicio.component.css']
})
export class TemasInferioresInicioComponent implements OnInit {

  @Input() nombreTema: string = '';
  @Input() urlTema: string = '';
  @Input() colorTema: string = '';
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
