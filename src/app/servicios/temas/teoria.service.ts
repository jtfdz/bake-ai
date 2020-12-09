import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import teoria from 'src/assets/json/teoria.json';
import hiragana from 'src/assets/json/hiragana.json';
declare const getFromStore: any;
declare const setInStore: any;

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}


@Injectable({
  providedIn: 'root'
})
export class TeoriaService {

	teoriaObj: IndexObj = teoria;
	teoriaStr: IndexStr = {};

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



   hiraganaObj: IndexObj = hiragana;



  getHiragana(): {} {
    return this.hiraganaObj;
  }







}
