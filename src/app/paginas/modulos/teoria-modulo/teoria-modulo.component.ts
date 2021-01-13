import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdPasosService } from 'src/app/servicios/principales/shepherd-pasos.service';
import { toRomaji, toHiragana, isHiragana, toKatakana } from 'wanakana';
declare const getEbCN: any;
declare const setInputToWakaByMultiple: any;

@Component({
  selector: 'app-teoria-modulo',
  templateUrl: './teoria-modulo.component.html',
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
    for(var kana of this.dataTeoria) { this.dataTeoriaRomaji.push(toRomaji(kana)) }
    this.componentesService.getUsuarioIniciadoModulos().subscribe(
     usuarioIniciadoModulos => this.usuarioIniciadoModulos = usuarioIniciadoModulos
    ); 
    this.respuestas = Array<string>(this.dataTeoria.length).fill("")
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

   for(var i=0; i<this.respuestas.length; i++){ 
      this.progreso[i] = (this.respuestas[i]== this.dataTeoriaRomaji[i])? true: false;
    }
    this.completadoEscrito = (!this.progreso.includes(false))? true: false;  
    this.completado = (this.sonidosAccionados.length > this.dataTeoria.length-1) && ( this.completadoEscrito );

  }


  teoriaRespuesta(){
    this.respuestaTeoria.emit({acierto: true, weight: 'teoria_respondida'});
  }

  avanzarModulo(){
    this.sigueTeoria.emit(true);
  }

}
