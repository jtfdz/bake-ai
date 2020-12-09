import { Component, OnInit } from '@angular/core';

type tipoKatakana = {
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
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent implements OnInit {

  tablaActivada: string = 'pura';


	katakana:  tipoKatakana[] = [
	    { letra: 'k', a: "カ", i: "キ", u: "ク", e: "ケ", o: "コ"},
	    { letra: 's', a: "サ", i: "シ", u: "ス", e: "セ", o: "ソ"},
	    { letra: 't', a: "タ", i: "チ", u: "ツ", e: "テ", o: "ト"},
	    { letra: 'n', a: "ナ", i: "ニ", u: "ヌ", e: "ネ", o: "ノ"},
	    { letra: 'h', a: "ハ", i: "ヒ", u: "フ", e: "ヘ", o: "ホ"},
	    { letra: 'm', a: "マ", i: "ミ", u: "ム", e: "メ", o: "モ"},
	    { letra: 'y', a: "ヤ", i: "", u: "ユ", e: "", o: "ヨ"},	    
	    { letra: 'r', a: "ラ", i: "リ", u: "ル", e: "レ", o: "ロ"},	   
	    //falta especiales
	];

  katakanaImpura:  tipoKatakana[] = [
      { letra: 'g', a: "ガ", i: "ギ", u: "グ", e: "ゲ", o: "ゴ"},
      { letra: 'z', a: "ザ", i: "ジ", u: "ズ", e: "ゼ", o: "ゾ"},
      { letra: 'd', a: "ダ", i: "ヂ", u: "ヅ", e: "デ", o: "ド"},
      { letra: 'b', a: "バ", i: "ビ", u: "ブ", e: "ベ", o: "ボ"},
      { letra: 'p', a: "パ", i: "ピ", u: "プ", e: "ぺ", o: "ポ"},    
  ];

  katakanaCompuesta:  tipoCompuesta[] = [
      { letra: 'k', a: "キャ", u: "キュ", o: "キョ"},
      { letra: 's', a: "シャ", u: "シュ", o: "ショ"},
      { letra: 'ch', a: "チャ", u: "チュ", o: "チョ"},
      { letra: 'n', a: "ニャ", u: "ニュ", o: "ニョ"},
      { letra: 'h', a: "ヒャ", u: "ヒュ", o: "ヒョ"}, 
      { letra: 'm', a: "ミャ", u: "ミュ", o: "ミョ"}, 
      { letra: 'r', a: "リャ", u: "リュ", o: "リョ"}, 
      { letra: 'g', a: "ギャ", u: "ギュ", o: "ギョ"}, 
      { letra: 'j', a: "ジャ", u: "ジュ", o: "ジョ"},  
      { letra: 'b', a: "ビャ", u: "ビュ", o: "ビョ"}, 
      { letra: 'p', a: "ピャ", u: "ピュ", o: "ピョ"},         
  ];



  constructor() { }

  ngOnInit(): void {
  }


  activarTabla(tipo: string): void{
    this.tablaActivada = tipo;
  }



}
