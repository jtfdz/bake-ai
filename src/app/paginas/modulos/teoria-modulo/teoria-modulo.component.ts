import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdPasosService } from 'src/app/servicios/principales/shepherd-pasos.service';
import { toRomaji, toHiragana, isHiragana, toKatakana } from 'wanakana';
declare const getEbCN: any;
declare const setInputToWakaByMultiple: any;

@Component({
  selector: 'app-teoria-modulo',
  templateUrl: './teoria-modulo.component.html',
  styleUrls: ['./teoria-modulo.component.css']
})
export class TeoriaModuloComponent implements OnInit, AfterViewInit {

  @Input() dataTeoria: any[] = [];
  @Output() respuestaTeoria: EventEmitter<any> = new EventEmitter<any>();
  @Output() sigueTeoria: EventEmitter<any> = new EventEmitter<any>();

  dataTeoriaRomaji: string[] = [];
  usuarioIniciadoModulos: boolean = false;
  sonidosAccionados: string[] = [];
  completadoEscrito: boolean = false;
  respuestas: string[] = [];
  progreso: boolean[] = [];
  respuestasTraducidas: string[] = [];
  completado: boolean = false;


  constructor(private shepherdPasosService: ShepherdPasosService, private componentesService: ComponentesService) { }

  ngOnInit(): void {
    for (var j = 0; j < this.dataTeoria.length; j++) {
      this.dataTeoriaRomaji.push(toRomaji(this.dataTeoria[j]))
    }
    this.componentesService.getUsuarioIniciadoModulos().subscribe(
     usuarioIniciadoModulos => this.usuarioIniciadoModulos = usuarioIniciadoModulos
    ); 
    this.respuestas = Array<string>(this.dataTeoria.length).fill("")
    this.respuestasTraducidas = Array<string>(this.dataTeoria.length).fill("")
    this.progreso = Array<boolean>(this.dataTeoria.length).fill(false)

  }

  ngAfterViewInit() {
    setInputToWakaByMultiple('respuesta-teoria', this.dataTeoria[0])
    if(!this.usuarioIniciadoModulos){
      this.shepherdPasosService.iniciarPasosModulos();
    }
  }

  activarAudio(kana: string, evento: any): void{
    this.componentesService.reproducirAudio(kana, true)
    if(evento.currentTarget.className.search(' is-success') == -1){
      evento.currentTarget.className += ' is-success';
      this.sonidosAccionados.push(kana)
    }

  this.completado = (this.sonidosAccionados.length > this.dataTeoria.length-1) && ( this.completadoEscrito );

  }

  chequearEscrito() {

    for (var i = 0; i < this.respuestas.length; i++) {
      this.respuestasTraducidas[i] = isHiragana(this.dataTeoria[0])? toHiragana(this.respuestas[i]): toKatakana(this.respuestas[i]);
    }

   for(var i=0; i<this.respuestasTraducidas.length; i++){ 
      if(this.respuestasTraducidas[i] == this.dataTeoria[i]){ 
        this.progreso[i] = true;   
      }else{  
        this.progreso[i] = false; 
      }
    }

    if(!this.progreso.includes(false)){
      this.completadoEscrito = true;
    }else{
      this.completadoEscrito = false;
    }
    
    this.completado = (this.sonidosAccionados.length > this.dataTeoria.length-1) && ( this.completadoEscrito );

  }



  teoriaRespuesta(){
    this.respuestaTeoria.emit({acierto: true, weight: 'teoria_respondida'});
  }

  avanzarModulo(){
    this.sigueTeoria.emit(true);
  }

}
