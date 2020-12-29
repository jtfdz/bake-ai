import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
declare const animateValue: any;
declare const getFromStore: any;
declare const setInStore: any;
declare const modeloDeAprendizaje: any;

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor() { }

	private arrayOfModulos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(getFromStore('modelo.modulos'));

	private progresoArr: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
	private progresoArrIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	private dataParaModulos: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(getFromStore('modelo.dataParaModulos'));


	getModulosAprendizaje(): Observable<string[]> {
	  return this.arrayOfModulos.asObservable();
	}

	setDataParaModulos(kana: string) { modeloDeAprendizaje(kana); this.arrayOfModulos.next(getFromStore('modelo.modulos')); this.dataParaModulos.next(getFromStore('modelo.dataParaModulos')); }

	getDataParaModulos(): Observable<any[]> {
	  return this.dataParaModulos.asObservable();
	}

	getProgresoArray(): Observable<number[]> {
	  return this.progresoArr.asObservable();
	}

	setProgresoArray(cambio: number[]) { this.progresoArr.next(cambio); }


	getProgresoAvance(): Observable<number> {
	  return this.progresoArrIndex.asObservable();
	}

	progresoAnimacion: number = 0;
	progresoAnimacionArray: number[] = [];

	setProgresoAvance(cambio: number) { 
		this.getProgresoAvance().subscribe(
	     progresoArrIndex => this.progresoAnimacion = progresoArrIndex
	    ); 
		this.getProgresoArray().subscribe(
	     progresoArr => this.progresoAnimacionArray = progresoArr
	    ); 
		animateValue('barraDeProgreso', this.progresoAnimacionArray[this.progresoAnimacion], this.progresoAnimacionArray[cambio], 1000); 
		this.progresoArrIndex.next(cambio); 
	}






}
