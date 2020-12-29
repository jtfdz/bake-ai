import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const getEbI: any;
declare const getEbCN: any;
declare const setInStore: any;


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

  //mejorar: salio de open tab que tambien al parecer le usa alguien mas, si no hacer un servicio XD
  abrirTab(event: any, gustoNombre: string){
    var i, tablinks;
    tablinks = getEbCN("tab");
    var isTrueSet = (getEbI("gustosPicker").getAttribute("disabled") == 'true');
    if(isTrueSet){
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
      }
      event.currentTarget.className += " is-active";
      this.componentesService.setGustoUsuario(gustoNombre)
    }
  }






}
