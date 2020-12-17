import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tres-imagenes-primer-inicio',
  templateUrl: './tres-imagenes-primer-inicio.component.html',
  styleUrls: ['./tres-imagenes-primer-inicio.component.css']
})
export class TresImagenesPrimerInicioComponent implements OnInit {

  constructor() { }
  @Input() imagenesNombre: string[] = [''];

  ngOnInit(): void {
  }

}
