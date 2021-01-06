import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import urls from 'src/assets/json/urls.json';
declare const modalFunction: any;
declare const getEbI: any;

@Component({
  selector: 'app-temas-kanas-botones',
  templateUrl: './temas-kanas-botones.component.html',
})
export class TemasKanasBotonesComponent implements OnInit {

  @Input() letraKana: string = '';
  @Input() tablaTipo: string = '';
  imagenesHiragana: string = urls.trazosHiragana;
  imagenesKatakana: string = urls.trazosKatakana;
  imagenUrl: string = '';
  audioCargando: boolean = false;

  constructor(private temasService: TemasService, private componentesService: ComponentesService) { }

  ngOnInit(): void {
  }

  abrirCard(): void{
    getEbI('tituloKanaCard').innerText = this.letraKana;
    getEbI('romajiKanaCard').innerText = this.temasService.getRomaji(this.letraKana)
    this.temasService.esHiragana(this.letraKana)? this.imagenUrl=this.imagenesHiragana: this.imagenUrl=this.imagenesKatakana;
    getEbI('imagenTrazo').src = this.imagenUrl + '/' + this.temasService.getRomaji(this.letraKana) + '.png'; 
    modalFunction(1, '#modalCard'); 
  }

  reproducir(): void{
    this.componentesService.getAudioCargando().subscribe(
     audioCargando =>  this.audioCargando = audioCargando
     ); 
    this.componentesService.reproducirAudio(this.temasService.getRomaji(getEbI('tituloKanaCard').innerText)); 
  }



}
