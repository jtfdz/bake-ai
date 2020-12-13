import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import teoria from 'src/assets/json/teoria.json';
import hiraganaAlfabeto from 'src/assets/json/hiraganaAlfabeto.json';


declare const getFromStore: any;
declare const setInStore: any;
declare const getKeyByValue: any;

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}

type tipoCompleta = {
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


@Injectable({
  providedIn: 'root'
})
export class TemasService {



	teoriaObj: IndexObj = teoria;
	teoriaStr: IndexStr = {};
  hiraganaStr: IndexStr = hiraganaAlfabeto;

  tituloSeccion: string = 'general';
  contenidoTitulo: string = 'historia';

  private tituloTema: BehaviorSubject<string> = new BehaviorSubject<string>('general >> historia');
  private temaContenido: BehaviorSubject<string> = new BehaviorSubject<string>('la historia de los abecedarios');
  private temaAprendido: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(getFromStore('aprender.'+this.tituloSeccion+'.'+this.contenidoTitulo));


  constructor() { }

  setTeoria(seccionContenido: string, tituloContenido: string): void{

    this.tituloSeccion = seccionContenido;
    this.contenidoTitulo = tituloContenido;

  	this.tituloTema.next(seccionContenido+' >> '+tituloContenido);
  	this.teoriaStr = this.teoriaObj[seccionContenido];

  	this.temaContenido.next(this.teoriaStr[tituloContenido.replace(/ /g,'')]);
    this.temaAprendido.next(getFromStore('aprender.'+seccionContenido+'.'+tituloContenido))
  }

  setAprendido(contenidoBoolean: boolean): void{
    console.log('aprender.'+this.tituloSeccion+'.'+this.contenidoTitulo)
    setInStore('aprender.'+this.tituloSeccion+'.'+this.contenidoTitulo, contenidoBoolean)
  }


	getTituloTema(): Observable<string> {
	  return this.tituloTema.asObservable();
	}

	getTemaContenido(): Observable<string> {
	  return this.temaContenido.asObservable();
	}

  getTemaAprendido(): Observable<boolean> {
    return this.temaAprendido.asObservable();
  }





  hiragana: tipoCompleta[] = [
      { letra: '', a: "あ", i: "い", u: "う", e: "え", o: "お"},
      { letra: 'k', a: "か", i: "き", u: "く", e: "け", o: "こ"},
      { letra: 's', a: "さ", i: "し", u: "す", e: "せ", o: "そ"},
      { letra: 't', a: "た", i: "ち", u: "つ", e: "て", o: "と"},
      { letra: 'n', a: "な", i: "に", u: "ぬ", e: "ね", o: "の"},
      { letra: 'h', a: "は", i: "ひ", u: "ふ", e: "へ", o: "ほ"},
      { letra: 'm', a: "ま", i: "み", u: "む", e: "め", o: "も"},
      { letra: 'y', a: "や", i: "", u: "ゆ", e: "", o: "よ"},      
      { letra: 'r', a: "ら", i: "り", u: "る", e: "れ", o: "ろ"},     
  ];

  hiraganaImpura:  tipoCompleta[] = [
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


  katakana:  tipoCompleta[] = [
      { letra: '', a: "ア", i: "イ", u: "ウ", e: "エ", o: "オ"},
      { letra: 'k', a: "カ", i: "キ", u: "ク", e: "ケ", o: "コ"},
      { letra: 's', a: "サ", i: "シ", u: "ス", e: "セ", o: "ソ"},
      { letra: 't', a: "タ", i: "チ", u: "ツ", e: "テ", o: "ト"},
      { letra: 'n', a: "ナ", i: "ニ", u: "ヌ", e: "ネ", o: "ノ"},
      { letra: 'h', a: "ハ", i: "ヒ", u: "フ", e: "ヘ", o: "ホ"},
      { letra: 'm', a: "マ", i: "ミ", u: "ム", e: "メ", o: "モ"},
      { letra: 'y', a: "ヤ", i: "", u: "ユ", e: "", o: "ヨ"},      
      { letra: 'r', a: "ラ", i: "リ", u: "ル", e: "レ", o: "ロ"},     
  ];

  katakanaImpura:  tipoCompleta[] = [
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



 hiraganaStraightObject: IndexStr = {
    a: "あ", i: "い", u: "う", e: "え", o: "お",
    ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
    sa: "さ", shi: "し", su: "す", se: "せ", so: "そ",
    ta: "た", chi: "ち", tsu: "つ", te: "て", to: "と",
    na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
    ha: "は", hi: "ひ", fu: "ふ",he: "へ", ho: "ほ",
    ma: "ま", mi: "み", mu: "む",me: "め", mo: "も",
    ya: "や", yu: "ゆ", yo: "よ",
    ra: "ら", ri: "り", ru: "る",re: "れ", ro: "ろ",
    wa: "わ", wo: "を", n: "ん",
    ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご", 
    za: "ざ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
    da: "だ", dzi: "ぢ", dzu: "づ", de: "で", do: "ど",
    ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
    pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
    kya: "きゃ", kyu: "きゅ", kyo: "きょ",
    sha: "しゃ", shu: "しゅ", sho: "しょ",
    cha: "ちゃ", chu: "ちゅ", cho: "ちょ",
    nya: "にゃ", nyu: "にゅ", nyo: "にょ",
    hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
    
    ja: "じゃ", ju: "じゅ", jo: "じょ",
    mya: "みゃ", myu: "みゅ", myo: "みょ",
    rya: "りゃ", ryu: "りゅ", ryo: "りょ",
    gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
    bya: "びゃ", byu: "びゅ", byo: "びょ",
    pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ"
}



 katakanaStraightObject: IndexStr = {
    a: "ア", i: "イ", u: "ウ", e: "エ", o: "オ",
    ka: "カ", ki: "キ", ku: "ク", ke: "ケ", ko: "コ",
    sa: "サ", shi: "シ", su: "ス", se: "セ", so: "ソ",
    ta: "タ", chi: "チ", tsu: "ツ", te: "テ", to: "ト",
    na: "ナ", ni: "ニ", nu: "ヌ", ne: "ネ", no: "ノ",
    ha: "ハ", hi: "ヒ", fu: "フ",he: "ヘ", ho: "ホ",
    ma: "マ", mi: "ミ", mu: "ム",me: "メ", mo: "モ",
    ya: "ヤ", yu: "ユ", yo: "ヨ",
    ra: "ラ", ri: "リ", ru: "ル",re: "レ", ro: "ロ",
    wa: "ワ", wo: "ヲ", n: "ン",
    ga: "ガ", gi: "ギ", gu: "グ", ge: "ゲ", go: "ゴ", 
    za: "ザ", ji: "ジ", zu: "ズ", ze: "ゼ", zo: "ゾ",
    da: "ダ", dzi: "ヂ", dzu: "ヅ", de: "デ", do: "ド",
    ba: "バ", bi: "ビ", bu: "ブ", be: "ベ", bo: "ボ",
    pa: "パ", pi: "ピ", pu: "プ", pe: "ペ", po: "ポ",
    kya: "キャ", kyu: "キュ", kyo: "キョ",
    sha: "シャ", shu: "シュ", sho: "ショ",
    cha: "チャ", chu: "チュ", cho: "チョ",
    nya: "ニャ", nyu: "ニュ", nyo: "ニョ",
    hya: "ヒャ", hyu: "ヒュ", hyo: "ヒョ",
    ja: "ジャ", ju: "ジュ", jo: "ジョ",
    mya: "ミャ", myu: "ミュ", myo: "ミョ",
    rya: "リャ", ryu: "リュ", ryo: "リョ",
    gya: "ギャ", gyu: "ギュ", gyo: "ギョ",
    bya: "ビャ", byu: "ビュ", byo: "ビョ",
    pya: "ピャ", pyu: "ピュ", pyo: "ピョ"
}







  getTablaPura(tituloKana: string): tipoCompleta[] {
    if(tituloKana === 'hiragana'){ return this.hiragana; }
    return this.katakana;
  }

  getTablaImpura(tituloKana: string): tipoCompleta[] {
    if(tituloKana === 'hiragana'){ return this.hiraganaImpura; }
    return this.katakanaImpura;
  }

  getTablaCompuesta(tituloKana: string): tipoCompuesta[] {
    if(tituloKana === 'hiragana'){ return this.hiraganaCompuesta; }
    return this.katakanaCompuesta;
  }

  getKanaInformacion(kanaOriginal: string): string {
    if(getKeyByValue(this.hiraganaStraightObject, kanaOriginal))
      return getKeyByValue(this.hiraganaStraightObject, kanaOriginal)
    return getKeyByValue(this.katakanaStraightObject, kanaOriginal)
  }

  getHiraganaOKatakana(kanaOriginal: string): boolean {
    if(getKeyByValue(this.hiraganaStraightObject, kanaOriginal))
      return true;
    return false;
  }

}
