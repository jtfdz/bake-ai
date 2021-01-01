import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-usuario-nombre',
  templateUrl: './input-usuario-nombre.component.html',
  styleUrls: ['./input-usuario-nombre.component.css']
})
export class InputUsuarioNombreComponent implements OnInit {

  @Input() deshabilitarButton: boolean = false;
  @Input() valorInicial: string = '';
  @Output() nombreEnviar: EventEmitter<any> = new EventEmitter<any>();
  nombreUsuario: string = '';

  constructor() { }

  ngOnInit(): void {
    this.nombreUsuario = this.valorInicial;
  }

}
