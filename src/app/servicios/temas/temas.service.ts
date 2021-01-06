import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { isHiragana, toRomaji } from 'wanakana';
import teoria from 'src/assets/json/teoria.json';

declare const getFromStore: any;
declare const setInStore: any;
declare const removeObjectProperty: any;
declare const getRandom: any;
declare const pushArray: any;
declare const shuffle: any;

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}

interface IndexNum {
  [index: number]: string;
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

type lecturasKun = {
  kana: string, 
  kanaExtra: string
}

type lecturasOn = {
  kana: string
}

type kanjiType = {
  kanji: string,
  lecturaskunyomi: lecturasKun[],
  lecturasonyomi: lecturasOn[],
  numeroDeTrazos: number,
  traduccion: string
}

type Nnivel = {
  'n5': kanjiType[],
  'n4': kanjiType[],
  'n3': kanjiType[],
  'n2': kanjiType[],
  'n1': kanjiType[]
}


@Injectable({
  providedIn: 'root'
})
export class TemasService {

  kanjiBody: Nnivel = {


    'n5': [{ 
        kanji: '一', 
        lecturaskunyomi: [{kana: 'ひと', kanaExtra: ''},　{kana: 'ひと', kanaExtra: 'つ'}], 
        lecturasonyomi: [{kana: 'イチ'},　{kana: 'イツ'}],
        numeroDeTrazos: 1,
        traduccion: 'uno'
      },
      { 
        kanji: 'ニ', 
        lecturaskunyomi: [{kana: 'ふた', kanaExtra: ''},　{kana: 'ふた', kanaExtra: 'つ'}], 
        lecturasonyomi: [{kana: 'ニ'},　{kana: 'ジ'}],
        numeroDeTrazos: 2,
        traduccion: 'dos'
      },
      { 
        kanji: '三', 
        lecturaskunyomi: [{kana: 'み', kanaExtra: ''},　{kana: 'み', kanaExtra: 'つ'}], 
        lecturasonyomi: [{kana: 'サン'},　{kana: 'ゾウ'}],
        numeroDeTrazos: 3,
        traduccion: 'tres'
      },
      { 
        kanji: '四', 
        lecturaskunyomi: [{kana: 'よ', kanaExtra: ''},　{kana: 'よん', kanaExtra: ''},　{kana: 'よ', kanaExtra: 'つ'}], 
        lecturasonyomi: [{kana: 'シ'}],
        numeroDeTrazos: 5,
        traduccion: 'cuatro'
      },
      { 
        kanji: '五', 
        lecturaskunyomi: [{kana: 'いつ', kanaExtra: ''},　{kana: 'いつ', kanaExtra: 'つ'}], 
        lecturasonyomi: [{kana: 'ゴ'}],
        numeroDeTrazos: 4,
        traduccion: 'cinco'
      },
      { 
        kanji: '六', 
        lecturaskunyomi: [{kana: 'む', kanaExtra: 'っつ'}], 
        lecturasonyomi: [{kana: 'ロク'},　{kana: 'リク'}],
        numeroDeTrazos: 4,
        traduccion: 'seis'
      },
      { 
        kanji: '七', 
        lecturaskunyomi: [{kana: 'なな', kanaExtra: ''},　{kana: 'なの', kanaExtra: 'か'}], 
        lecturasonyomi: [{kana: 'シチ'}],
        numeroDeTrazos: 2,
        traduccion: 'siete'
      },
      { 
        kanji: '八', 
        lecturaskunyomi: [{kana: 'や', kanaExtra: 'っつ'},　{kana: 'よう', kanaExtra: 'か'}], 
        lecturasonyomi: [{kana: 'ハチ'}],
        numeroDeTrazos: 2,
        traduccion: 'ocho'
      },
      { 
        kanji: '九', 
        lecturaskunyomi: [{kana: 'ここの', kanaExtra: 'つ'},　{kana: 'ここの', kanaExtra: 'か'}], 
        lecturasonyomi: [{kana: 'キュウ'},　{kana: 'ク'}],
        numeroDeTrazos: 2,
        traduccion: 'nueve'
      },
      { 
        kanji: '十', 
        lecturaskunyomi: [{kana: 'とお', kanaExtra: 'か'}], 
        lecturasonyomi: [{kana: 'ジュウ'}],
        numeroDeTrazos: 2,
        traduccion: 'diez'
      },
      { 
        kanji: '百', 
        lecturaskunyomi: [], 
        lecturasonyomi: [{kana: 'ヒャク'}],
        numeroDeTrazos: 6,
        traduccion: 'cien'
      },
      { 
        kanji: '千', 
        lecturaskunyomi: [{kana: 'ち', kanaExtra: ''}], 
        lecturasonyomi: [{kana: 'セン'}],
        numeroDeTrazos: 3,
        traduccion: 'mil'
      },
      { 
        kanji: '万', 
        lecturaskunyomi: [], 
        lecturasonyomi: [{kana: 'マン'}],
        numeroDeTrazos: 3,
        traduccion: 'diez mil'
      },
      { 
        kanji: '日', 
        lecturaskunyomi: [{kana: 'ひ', kanaExtra: ''},　{kana: 'か', kanaExtra: ''}], 
        lecturasonyomi: [{kana: 'ニチ'},　{kana: 'ジツ'}],
        numeroDeTrazos: 4,
        traduccion: 'sol, día'
      },
      { 
        kanji: '月', 
        lecturaskunyomi: [{kana: 'つき', kanaExtra: ''}], 
        lecturasonyomi: [{kana: 'ゲツ'},　{kana: 'カツ'}],
        numeroDeTrazos: 4,
        traduccion: 'luna, mes'
      },

      ], //n5 fin



    'n4': [{ 
        kanji: '事', 
        lecturaskunyomi: [{kana: 'こと', kanaExtra: ''}, {kana: 'つか', kanaExtra: 'える'}, {kana: 'つか', kanaExtra: 'う'}],
        lecturasonyomi: [{kana: 'ジ'}, {kana: 'ズ'}], 
        numeroDeTrazos: 8,
        traduccion: 'materia, cosa, hecho, asunto, razón, posible'
      }], //n4 fin


    'n3': [{ 
        kanji: '公', 
        lecturaskunyomi: [{kana: 'おおやけ', kanaExtra: ''}], 
        lecturasonyomi: [{kana: 'コウ'},{kana: 'ク'}],
        numeroDeTrazos: 4,
        traduccion: 'público, príncipe, oficial, gubernamental'
      }], //n3 fin

    'n2': [{ 
        kanji: '亡', 
        lecturaskunyomi: [{kana: 'な', kanaExtra: 'い'},{kana: 'ほろ', kanaExtra: 'ぶ'}], 
        lecturasonyomi: [{kana: 'ボウ'},{kana: 'モウ'}],
        numeroDeTrazos: 3,
        traduccion: 'muerto, el posterior, morir, perecer'
      }], //n2 fin

    'n1': [{ 
        kanji: '士', 
        lecturaskunyomi: [{kana: 'さむらい', kanaExtra: ''}], 
        lecturasonyomi: [{kana: 'シ'}],
        numeroDeTrazos: 3,
        traduccion: 'caballero, samurai'
      }] //n1 fin
  };




  getKanjis(): Nnivel {
    return this.kanjiBody;
  }








	teoriaObj: IndexObj = teoria;
	teoriaStr: IndexStr = {};

  tituloSeccion: string = 'general';
  contenidoTitulo: string = 'historia';

  private tituloTema: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private temaContenido: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private temaAprendido: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(getFromStore('aprender.'+this.tituloSeccion+'.'+this.contenidoTitulo));


  constructor() { }

  setTeoria(seccionContenido: string, tituloContenido: string): void{

    this.tituloSeccion = seccionContenido;
    this.contenidoTitulo = tituloContenido;

  	this.tituloTema.next(seccionContenido+' >> '+tituloContenido);
  	this.teoriaStr = this.teoriaObj[seccionContenido];

  	this.temaContenido.next(this.teoriaStr[tituloContenido.replace(/ /g,'')]);
    this.temaAprendido.next(getFromStore('teoria.'+seccionContenido+'.'+tituloContenido))
  }

  setAprendido(contenidoBoolean: boolean): void{
    setInStore('teoria.'+this.tituloSeccion+'.'+this.contenidoTitulo, contenidoBoolean)
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




  //kanas para VISTAS
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
      { letra: 'ky', a: "きゃ", u: "きゅ", o: "きょ"},
      { letra: 'sh', a: "しゃ", u: "しゅ", o: "しょ"},
      { letra: 'ch', a: "ちゃ", u: "ちゅ", o: "ちょ"},
      { letra: 'ny', a: "にゃ", u: "にゅ", o: "にょ"},
      { letra: 'hy', a: "ひゃ", u: "ひゅ", o: "ひょ"}, 
      { letra: 'my', a: "みゃ", u: "みゅ", o: "みょ"}, 
      { letra: 'ry', a: "りゃ", u: "りゅ", o: "りょ"}, 
      { letra: 'gy', a: "ぎゃ", u: "ぎゅ", o: "ぎょ"}, 
      { letra: 'j', a: "じゃ", u: "じゅ", o: "じょ"},  
      { letra: 'by', a: "びゃ", u: "びゅ", o: "びょ"}, 
      { letra: 'py', a: "ぴゃ", u: "ぴゅ", o: "ぴょ"},         
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
      { letra: 'ky', a: "キャ", u: "キュ", o: "キョ"},
      { letra: 'sh', a: "シャ", u: "シュ", o: "ショ"},
      { letra: 'ch', a: "チャ", u: "チュ", o: "チョ"},
      { letra: 'ny', a: "ニャ", u: "ニュ", o: "ニョ"},
      { letra: 'hy', a: "ヒャ", u: "ヒュ", o: "ヒョ"}, 
      { letra: 'my', a: "ミャ", u: "ミュ", o: "ミョ"}, 
      { letra: 'ry', a: "リャ", u: "リュ", o: "リョ"}, 
      { letra: 'gy', a: "ギャ", u: "ギュ", o: "ギョ"}, 
      { letra: 'j', a: "ジャ", u: "ジュ", o: "ジョ"},  
      { letra: 'by', a: "ビャ", u: "ビュ", o: "ビョ"}, 
      { letra: 'py', a: "ピャ", u: "ピュ", o: "ピョ"},         
  ];






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

  getRomaji(kanaOriginal: string): string {
    return toRomaji(kanaOriginal);
  }

  esHiragana(kanaOriginal: string): boolean {
    if(isHiragana(kanaOriginal))
      return true;
    return false;
  }




      //not for views
      hiraganaObjArr: Record<string, string>[] = [
        { letra: 'vocales', a: "あ", i: "い", u: "う", e: "え", o: "お"},
        { letra: 'k', ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ"},
        { letra: 's', sa: "さ", shi: "し", su: "す", se: "せ", so: "そ"},
        { letra: 't', ta: "た", chi: "ち", tsu: "つ", te: "て", to: "と"},
        { letra: 'n', na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の"},
        { letra: 'h', ha: "は", hi: "ひ", fu: "ふ", he: "へ", ho: "ほ"},
        { letra: 'm', ma: "ま", mi: "み", mu: "む", me: "め", mo: "も"},
        { letra: 'y', ya: "や", yu: "ゆ", yo: "よ"},      
        { letra: 'r', ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ"},
        { letra: 'especiales', wa: "わ", n: "ん", wo: "を"},
        { letra: 'g', ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご"},
        { letra: 'z', za: "ざ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ"},
        { letra: 'd', da: "だ", ji: "ぢ", dzu: "づ", de: "で", do: "ど"},
        { letra: 'b', ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ"},
        { letra: 'p', pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ"},   
        { letra: 'ky', kya: "きゃ", kyu: "きゅ", kyo: "きょ"},
        { letra: 'sh', sha: "しゃ", shu: "しゅ", sho: "しょ"},
        { letra: 'ch', cha: "ちゃ", chu: "ちゅ", cho: "ちょ"},
        { letra: 'ny', nya: "にゃ", nyu: "にゅ", nyo: "にょ"},
        { letra: 'hy', hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ"}, 
        { letra: 'my', mya: "みゃ", myu: "みゅ", myo: "みょ"}, 
        { letra: 'ry', rya: "りゃ", ryu: "りゅ", ryo: "りょ"}, 
        { letra: 'gy', gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ"}, 
        { letra: 'j', ja: "じゃ", ju: "じゅ", jo: "じょ"},  
        { letra: 'by', bya: "びゃ", byu: "びゅ", byo: "びょ"}, 
        { letra: 'py', pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ"},        
    ]

    katakanaObjArr: Record<string, string>[] = [
        { letra: 'vocales', a: "ア", i: "イ", u: "ウ", e: "エ", o: "オ"},
        { letra: 'k', ka: "カ", ki: "キ", ku: "ク", ke: "ケ", ko: "コ"},
        { letra: 's', sa: "サ", shi: "シ", su: "ス", se: "セ", so: "ソ"},
        { letra: 't', ta: "タ", chi: "チ", tsu: "ツ", te: "テ", to: "ト"},
        { letra: 'n', na: "ナ", ni: "ニ", nu: "ヌ", ne: "ネ", no: "ノ"},
        { letra: 'h', ha: "ハ", hi: "ヒ", fu: "フ", he: "ヘ", ho: "ホ"},
        { letra: 'm', ma: "マ", mi: "ミ", mu: "ム", me: "メ", mo: "モ"},
        { letra: 'y', ya: "ヤ", yu: "ユ", yo: "ヨ"},      
        { letra: 'r', ra: "ラ", ri: "リ", ru: "ル", re: "レ", ro: "ロ"},
        { letra: 'especiales', wa: "ワ", n: "ン", wo: "ヲ"},
        { letra: 'g', ga: "ガ", gi: "ギ", gu: "グ", ge: "ゲ", go: "ゴ"},
        { letra: 'z', za: "ザ", ji: "ジ", zu: "ズ", ze: "ゼ", zo: "ゾ"},
        { letra: 'd', da: "ダ", ji: "ヂ", dzu: "ヅ", de: "デ", do: "ド"},
        { letra: 'b', ba: "バ", bi: "ビ", bu: "ブ", be: "ベ", bo: "ボ"},
        { letra: 'p', pa: "パ", pi: "ピ", pu: "プ", pe: "ペ", po: "ポ"},   
        { letra: 'ky', kya: "キャ", kyu: "キュ", kyo: "キョ"},
        { letra: 'sh', sha: "シャ", shu: "シュ", sho: "ショ"},
        { letra: 'ch', cha: "チャ", chu: "チュ", cho: "チョ"},
        { letra: 'ny', nya: "ニャ", nyu: "ニュ", nyo: "ニョ"},
        { letra: 'hy', hya: "ヒャ", hyu: "ヒュ", hyo: "ヒョ"}, 
        { letra: 'my', mya: "ミャ", myu: "ミュ", myo: "ミョ"}, 
        { letra: 'ry', rya: "リャ", ryu: "リュ", ryo: "リョ"}, 
        { letra: 'gy', gya: "ギャ", gyu: "ギュ", gyo: "ギョ"}, 
        { letra: 'j', ja: "ジャ", ju: "ジュ", jo: "ジョ"},  
        { letra: 'by', bya: "ビャ", byu: "ビュ", byo: "ビョ"}, 
        { letra: 'py', pya: "ピャ", pyu: "ピュ", pyo: "ピョ"},        
    ]


    getRandomSingleKanas(excepting: string, esHiragana: boolean): any[]{

      var filteredKana = {};
      var filteredKanaArray: IndexNum[] = [];

      for (var i = 0; i < this.hiraganaObjArr.length; i++) {
        (esHiragana)? this.setFilteredKana(filteredKana, this.hiraganaObjArr[i]): this.setFilteredKana(filteredKana, this.katakanaObjArr[i]);            
      }

      pushArray(filteredKanaArray, Object.values(filteredKana))
      filteredKanaArray = getRandom(filteredKanaArray, 20);

      if(!filteredKanaArray.includes(excepting)){
        filteredKanaArray[0] = excepting;
        shuffle(filteredKanaArray)   
      }

      return filteredKanaArray;
    }



  temporalKanaBloqueado: string[] = [];
  temporalKanaDesbloqueado: string[]  = [];

  private kanaEstudiando: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private kanaBloqueado: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  getKanaEstudiando(): Observable<string[]> {
    return this.kanaEstudiando.asObservable();
  }

  getKanaBloqueado(): Observable<string[]> {
    return this.kanaBloqueado.asObservable();
  }

  setKanaTo0() { 
    this.kanaEstudiando.next([]); 
    this.kanaBloqueado.next([]); 
  }

  setKanaEstudiando(cambio: string) { 
    this.temporalKanaDesbloqueado = [];
    this.getKanaEstudiando().subscribe(
     kanaEstudiando => this.temporalKanaDesbloqueado = kanaEstudiando
    ); 
    this.temporalKanaDesbloqueado.push(cambio)
    this.kanaEstudiando.next(this.temporalKanaDesbloqueado); 
  }

  setKanaBloqueado(cambio: string) { 
    this.temporalKanaBloqueado = [];
    this.getKanaBloqueado().subscribe(
     kanaBloqueado => this.temporalKanaBloqueado = kanaBloqueado
    ); 
    this.temporalKanaBloqueado.push(cambio)
    this.kanaBloqueado.next(this.temporalKanaBloqueado); 
  }



    target: string[] = [];



      omitObjKey(obj: Record<string, string>): Record<string, string>{
        const { ['letra']: omitted, ...rest} = obj;
        return rest;
      }




    setFilteredKana(fil:{}, ob:Record<string, string>){
      Object.assign(fil, this.omitObjKey(ob))
    }


    getTablaExaminacion(tituloKana: string, iniciado: boolean): {} {
    
      var filteredKana = {};
      var filteredKanaArray: IndexNum[] = [];
      let kanaBody = getFromStore('progreso.'+tituloKana+'.kanaBody');
      let esHiragana = (tituloKana=='hiragana');
      this.setKanaTo0();







      for (var i = 0; i < kanaBody.length; i++) {
        if(iniciado){ //ejemplo: a
           if(kanaBody[i].iniciada){ //iniciada necesita primero bloqueada

              (esHiragana)? this.setFilteredKana(filteredKana, this.hiraganaObjArr[i]): this.setFilteredKana(filteredKana, this.katakanaObjArr[i]);          
              (esHiragana)? filteredKanaArray.push(Object.values(this.omitObjKey(this.hiraganaObjArr[i]))):  filteredKanaArray.push(Object.values(this.omitObjKey(this.katakanaObjArr[i])));
              (esHiragana)? this.setKanaEstudiando(this.hiraganaObjArr[i].letra): this.setKanaEstudiando(this.katakanaObjArr[i].letra); 
            
            }else if(kanaBody[i].desbloqueado){
              (esHiragana)? this.setKanaEstudiando(this.hiraganaObjArr[i].letra): this.setKanaEstudiando(this.katakanaObjArr[i].letra); 
            }else if(!kanaBody[i].iniciada && !kanaBody[i].desbloqueado){
              (esHiragana)? this.setKanaBloqueado(this.hiraganaObjArr[i].letra): this.setKanaBloqueado(this.katakanaObjArr[i].letra); 
            }
        }else{ //ejemplo: s (siguiente iniciada)
           if(kanaBody[i].desbloqueado && !kanaBody[i].iniciada){
              (esHiragana)? this.setFilteredKana(filteredKana, this.hiraganaObjArr[i]): this.setFilteredKana(filteredKana, this.katakanaObjArr[i]);            
              (esHiragana)?filteredKanaArray.push(Object.values(this.omitObjKey(this.hiraganaObjArr[i]))):  filteredKanaArray.push(Object.values(this.omitObjKey(this.katakanaObjArr[i])));
            }
        }
      }

      //mejorar> innecesario____


      if(iniciado){
        (esHiragana)?setInStore('modelo.material.hiragana.iniciado', filteredKanaArray): setInStore('modelo.material.katakana.iniciado', filteredKanaArray)
      }else{
        (esHiragana)?setInStore('modelo.material.hiragana.desbloqueado', filteredKanaArray): setInStore('modelo.material.katakana.desbloqueado', filteredKanaArray)
      }

      

      return filteredKana;
    }




}
