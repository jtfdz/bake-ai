import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-con-spinner',
  templateUrl: './boton-con-spinner.component.html',
})
export class BotonConSpinnerComponent implements OnInit {

  @Input() textoInterior: string = '';
  @Input() nombreClase: string = '';
  @Output() botonPresionado: EventEmitter<any> = new EventEmitter<any>();
  deshabilitarBoton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  	this.deshabilitarBoton = false;
  }

  presionarBoton(evento: any){
    this.deshabilitarBoton = true;
    evento.currentTarget.className += ' is-loading';
    this.botonPresionado.emit();
  }


}
