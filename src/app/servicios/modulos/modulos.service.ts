import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
declare const animateValue: any;
declare const getFromStore: any;
declare const setInStore: any;

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor() { }

	private material: BehaviorSubject<Object> = new BehaviorSubject<Object>(getFromStore('modelo.material'));
	private arrayOfModulos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(getFromStore('modelo.modulos'));

	private progresoArr: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
	private progresoArrIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	private dataParaModulos: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(getFromStore('modelo.dataParaModulos'));


	getMaterialEstudio(): Observable<Object> {
	  return this.material.asObservable();
	}
	getModulosAprendizaje(): Observable<string[]> {
	  return this.arrayOfModulos.asObservable();
	}

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
