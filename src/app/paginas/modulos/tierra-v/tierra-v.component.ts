import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const getEbCN: any;

@Component({
  selector: 'app-tierra-v',
  templateUrl: './tierra-v.component.html',
  styleUrls: ['./tierra-v.component.css']
})
export class TierraVComponent implements OnInit {

  @Input() dataTierra: any[] = [];
  @Output() respuestaTierra: EventEmitter<any> = new EventEmitter<any>();
  @Output() sigueTierra: EventEmitter<any> = new EventEmitter<any>();

  gustoUsuario: string = '';
  respuesta: string = '';
  acertado: boolean = false;
  dioRespuesta: boolean = false;
   
  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getGustoUsuario().subscribe(
     gustoUsuario => this.gustoUsuario = gustoUsuario
    ); 
  }

  tierraRespuesta(){
      this.dioRespuesta = true;
      if(this.respuesta == this.dataTierra[0]){
        this.acertado = true;
        this.respuestaTierra.emit({acierto: true, weight: 'v_acierto'});
      }else{
        this.respuestaTierra.emit({acierto: false, weight: 'v_fallo'});
      }
  }

  tierraClick(item: string, event: any){
    this.componentesService.reproducirAudio(item, false);
    let tierraBoton = getEbCN('button-tierra');
    for (var i = 0; i < tierraBoton.length; i++) {
      tierraBoton[i].className = tierraBoton[i].className.replace(" is-dark", " is-light");
    }
    event.currentTarget.className = event.currentTarget.className.replace(" is-light", " is-dark");
    this.respuesta = item;
  }


  avanzarModulo(): void{
    this.sigueTierra.emit(true);
    this.respuesta = '';
    this.acertado = false;
    this.dioRespuesta = false;
    let tierraBoton = getEbCN('button-tierra');
    for (var i = 0; i < tierraBoton.length; i++) {
      tierraBoton[i].className = tierraBoton[i].className.replace(" is-dark", "is-light");
    }
  }

}
