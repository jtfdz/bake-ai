import { Component, OnInit, Input } from '@angular/core';
declare const openTab: any;
declare const getFromStore: any;
declare const getEbI: any;

@Component({
  selector: 'app-gustos-picker',
  templateUrl: './gustos-picker.component.html',
  styleUrls: ['./gustos-picker.component.css']
})
export class GustosPickerComponent implements OnInit {

  @Input() accesoGusto: boolean = false;
  gustoElegido: string = getFromStore('usuario.gusto');
  
  constructor() { }

  ngOnInit(): void {
  	getEbI(this.gustoElegido).className = 'tab is-active';
  }


}
