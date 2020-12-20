import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const openTab: any;
declare const getEbI: any;

@Component({
  selector: 'app-gustos-picker',
  templateUrl: './gustos-picker.component.html',
  styleUrls: ['./gustos-picker.component.css']
})
export class GustosPickerComponent implements OnInit {

  @Input() accesoGusto: boolean = false;
  gustoUsuario: string = '';
  
  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getGustoUsuario().subscribe(
     gustoUsuario => this.gustoUsuario = gustoUsuario
    ); 
    getEbI(this.gustoUsuario).className = 'tab is-active';
  }


}
