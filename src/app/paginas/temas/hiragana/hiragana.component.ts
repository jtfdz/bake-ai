import { Component, OnInit } from '@angular/core';
import { TeoriaService } from 'src/app/servicios/temas/teoria.service';

type tipoHiragana = {
    letra: string;
    a: string;
    i: string;
    u: string;
    e: string;
    o: string;
}

type tipoCompuesta = {
    letra: string;
    a: string;
    u: string;
    o: string;
}

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent implements OnInit {

  tablaActivada: string = 'pura';

  constructor(private teoriaService: TeoriaService) { }
  

	hiragana: tipoHiragana[] = [
	    { letra: 'k', a: "か", i: "き", u: "く", e: "け", o: "こ"},
	    { letra: 's', a: "さ", i: "し", u: "す", e: "せ", o: "そ"},
	    { letra: 't', a: "た", i: "ち", u: "つ", e: "て", o: "と"},
	    { letra: 'n', a: "な", i: "に", u: "ぬ", e: "ね", o: "の"},
	    { letra: 'h', a: "は", i: "ひ", u: "ふ", e: "へ", o: "ほ"},
	    { letra: 'm', a: "ま", i: "み", u: "む", e: "め", o: "も"},
	    { letra: 'y', a: "や", i: "", u: "ゆ", e: "", o: "よ"},	    
	    { letra: 'r', a: "ら", i: "り", u: "る", e: "れ", o: "ろ"},	   
	];

  hiraganaImpura:  tipoHiragana[] = [
      { letra: 'g', a: "が", i: "ぎ", u: "ぐ", e: "げ", o: "ご"},
      { letra: 'z', a: "ざ", i: "じ", u: "ず", e: "ぜ", o: "ぞ"},
      { letra: 'd', a: "だ", i: "ぢ", u: "づ", e: "で", o: "ど"},
      { letra: 'b', a: "ば", i: "び", u: "ぶ", e: "べ", o: "ぼ"},
      { letra: 'p', a: "ぱ", i: "ぴ", u: "ぷ", e: "ぺ", o: "ぽ"},    
  ];

  hiraganaCompuesta:  tipoCompuesta[] = [
      { letra: 'k', a: "きゃ", u: "きゅ", o: "きょ"},
      { letra: 's', a: "しゃ", u: "しゅ", o: "しょ"},
      { letra: 'ch', a: "ちゃ", u: "ちゅ", o: "ちょ"},
      { letra: 'n', a: "にゃ", u: "にゅ", o: "にょ"},
      { letra: 'h', a: "ひゃ", u: "ひゅ", o: "ひょ"}, 
      { letra: 'm', a: "みゃ", u: "みゅ", o: "みょ"}, 
      { letra: 'r', a: "りゃ", u: "りゅ", o: "りょ"}, 
      { letra: 'g', a: "ぎゃ", u: "ぎゅ", o: "ぎょ"}, 
      { letra: 'j', a: "じゃ", u: "じゅ", o: "じょ"},  
      { letra: 'b', a: "びゃ", u: "びゅ", o: "びょ"}, 
      { letra: 'p', a: "ぴゃ", u: "ぴゅ", o: "ぴょ"},         
  ];

  ngOnInit(): void {
  }


  activarTabla(tipo: string): void{
    this.tablaActivada = tipo;
  }



}
