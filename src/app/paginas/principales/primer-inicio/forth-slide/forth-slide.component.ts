import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';
declare const setInStore: any;
declare const getFromStore: any;


@Component({
  selector: 'app-forth-slide',
  templateUrl: './forth-slide.component.html',
  styleUrls: ['./forth-slide.component.css']
})
export class ForthSlideComponent implements OnInit {

  imagenes: String = urls.forthslide;

  constructor() { }

  ngOnInit(): void {
  }


  public finalizar(): void{
    setInStore('usuario.iniciado', true);
    //esto se puede mejorar XD OJO con schemas para electron store
    setInStore('aprender.general.historia', false);
    setInStore('aprender.general.kanas', false);
    // setInStore('aprender.hiragana.trazos', false);
    // setInStore('aprender.hiragana.lectura', false); 
    // setInStore('aprender.katakana.trazos', false);
    // setInStore('aprender.katakana.lectura', false);    
    // setInStore('aprender.kanji.trazos', false);
    // setInStore('aprender.kanji.lecturaskunyomi', false);
    // setInStore('aprender.kanji.lecturasonyomi', false);
    // setInStore('aprender.otros.notas', false);
  }

}
