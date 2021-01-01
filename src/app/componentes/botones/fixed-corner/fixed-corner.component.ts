import { Component, OnInit } from '@angular/core';
declare const modalFunction: any;

@Component({
  selector: 'app-fixed-corner',
  templateUrl: './fixed-corner.component.html',
  styleUrls: ['./fixed-corner.component.css']
})
export class FixedCornerComponent implements OnInit {

  textoColorArray: string[] = [
    'has-text-primary',
    'has-text-link',
    'has-text-danger',
    'has-text-success',
    'has-text-info',
    'has-text-warning',
  ];
  claseTexto: string = '';
  randomTexto: string[] = [];
  randomTextoElegido: string = '';

  constructor() { }

  activarSecreto(): void{
  	this.claseTexto = 'subtitle is-5 has-text-justified has-text-weight-medium '+this.textoColorArray[Math.floor(Math.random() * this.textoColorArray.length)]
    this.randomTextoElegido = this.randomTexto[Math.floor(Math.random() * this.randomTexto.length)]
    modalFunction(1, '#secretosModal')
  }

  //mejorar : más actividades

  ngOnInit(): void {
    //remembering the kanji
    this.randomTexto.push('(recurso en inglés con traducción oficial al español) leer el libro [Remembering the Kanji] (compuesto por James W. Heising) te ayudará a profundizar tus estudios del kanji (pero únicamente en sus traducciones).')
    //kanji garden
    this.randomTexto.push('(recurso en inglés) utilizar la página/ aplicación móvil [Kanji Garden] te ayudará a profundizar tus estudios del kanji (estudio completo: traducciones, lecturas y vocabulario).')
    //minbo no onna
    this.randomTexto.push('ver la película [ミンボーの女 Minbō no Onna] (1992, dirigida por Juzo Itami) te ayudará en retención auditiva y asimilación de vocabulario.')
    //tae kim
    this.randomTexto.push('leer la [Guía a la Grámatica Japonesa] (compuesta por Tae Kim) te ayudará a profundizar tu vocabulario y composición de oraciones, como también muchas, muchas otras cosas.')
    //kanji study
    this.randomTexto.push('(recurso en inglés) utilizar la aplicación móvil [Kanji Study] es un opción sumamente recomendable, ofrece una interfaz de usuario amigable y tiene desde los kanas hasta los kanji separados por nivel e información sumamente detallada de estos últimos.')
    //snk 
    this.randomTexto.push('leer el manga o ver el anime [進撃の巨人Shingeki no Kyojin] (escrito por Hajime Isayama) te permitirá extender tu vocabulario; el manga incluso utiliza furigana de principio a fin.')
    //maggie sensei 
    this.randomTexto.push('(recurso en inglés) leer el blog en línea de [Maggie Sensei] el cual ofrece lecciones altamente detalladas y con gran cantidad de ejemplos; sin importar lo específica que sea una duda, existen posibilidades positivas de que el blog tenga una lección sobre ella.')
    
  }

}
