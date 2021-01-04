import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-anterior-primer-inicio',
  templateUrl: './boton-anterior-primer-inicio.component.html',
})
export class BotonAnteriorPrimerInicioComponent implements OnInit {


  @Input() colorBoton: string = '';
  @Input() siguienteSection: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
