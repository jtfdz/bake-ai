import { Component, OnInit, Input } from '@angular/core';
declare const openModalCard: any;
// declare const setModalCard: any;
declare const getEbI: any;
import urls from 'src/assets/json/urls.json';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

@Component({
  selector: 'app-temas-kanas-botones',
  templateUrl: './temas-kanas-botones.component.html',
  styleUrls: ['./temas-kanas-botones.component.css']
})
export class TemasKanasBotonesComponent implements OnInit {

  @Input() letraKana: string = '';
  imagenes: String = urls.iniciogeneral;
  imagenesHiragana: String = urls.trazosHiragana;
  imagenesKatakana: String = urls.trazosHiragana;
  

  constructor(private temasService: TemasService, private componentesService: ComponentesService) { }

  ngOnInit(): void {

  }

  abrirCard(): void{
    getEbI('tituloKanaCard').innerText = this.letraKana;
    if(getEbI('tituloKanaCard').innerText[1]) getEbI('tituloKanaCard').style.fontSize = '50px';
    getEbI('romajiKanaCard').innerText = this.temasService.getKanaInformacion(this.letraKana)
    if(this.temasService.getHiraganaOKatakana(this.letraKana)){
     getEbI('imagenTrazo').src = this.imagenesHiragana + '/' + this.temasService.getKanaInformacion(this.letraKana) + '.png'; 
    }else{
      getEbI('imagenTrazo').src = this.imagenesKatakana + '/' + this.temasService.getKanaInformacion(this.letraKana) + '.png'
    }
    openModalCard(1); 
  }

  cerrarCard(): void{
    openModalCard(2); 
  }

  reproducir(): void{
     this.componentesService.reproducirAudio(this.temasService.getKanaInformacion(getEbI('tituloKanaCard').innerText)); 
  }



}
