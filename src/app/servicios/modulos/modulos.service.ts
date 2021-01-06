import { Injectable } from '@angular/core';
import { Observable, defer, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators'

declare const animateValue: any;
declare const getFromStore: any;
declare const setInStore: any;
declare const modeloDeAprendizaje: any;
declare const runIA: any;
declare const setIA: any;
declare const desbloqueaNuevo: any;
declare const aprobarIniciado: any;

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor() { }

	private arrayOfModulos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(getFromStore('modelo.modulos'));

	private progresoArr: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
	private progresoArrIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	private dataParaModulos: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(getFromStore('modelo.dataParaModulos'));

	private weightsArray: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	private resultadosArray: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  	private actualTemaActivado: BehaviorSubject<string> = new BehaviorSubject<string>('');

	getModulosAprendizaje(): Observable<string[]> {
	  return this.arrayOfModulos.asObservable();
	}

	setDataParaModulos(kana: string) { this.actualTemaActivado.next(kana); modeloDeAprendizaje(kana); this.arrayOfModulos.next(getFromStore('modelo.modulos')); this.dataParaModulos.next(getFromStore('modelo.dataParaModulos')); }

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

	getActualTemaActivado(): Observable<string> {
		return this.actualTemaActivado.asObservable();
	}

	arrayOfWeights: string[] = [];

	getWeightsArray(): Observable<string[]> {
		return this.weightsArray.asObservable();
	}

	setWeightsArray(weight_nombre: string) {
		this.getWeightsArray().subscribe(
		    weightsArray => this.arrayOfWeights = weightsArray
		); 
		this.arrayOfWeights.push(weight_nombre)
		this.weightsArray.next(this.arrayOfWeights); 
	}


	getResultadosArray(): Observable<number[]> {
	  return this.resultadosArray.asObservable();
	}



	private aciertosSuma: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private fallosSuma: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	

	getAciertosValor(): Observable<number> {
		return this.aciertosSuma.asObservable();
	}

	setAciertosValor() {
		var temporalAciertosValor = 0;
		this.getAciertosValor().subscribe(
		    aciertosSuma => {
		    	temporalAciertosValor = aciertosSuma+1
		    }
		); 
		this.aciertosSuma.next(temporalAciertosValor); 
	}



	getFallosValor(): Observable<number> {
		return this.fallosSuma.asObservable();
	}

	setFallosValor() {
		var temporalFallosValor = 0;
		this.getFallosValor().subscribe(
		    fallosSuma => {
		    	temporalFallosValor = fallosSuma+1
		    }
		); 
		this.fallosSuma.next(temporalFallosValor); 
	}



	devolverRetenciones(arrayOfPorcentajes: number[]){
		//arrayOfPorcentajes siempre vendrá en orden v/a/e
		var max = Math.max.apply(null, arrayOfPorcentajes)
		var min = Math.min.apply(null, arrayOfPorcentajes)
		var maxIndex = arrayOfPorcentajes.lastIndexOf(max)
		var minIndex = arrayOfPorcentajes.lastIndexOf(min)

		var med, medIndex = 0;
		for (var i = 0; i < arrayOfPorcentajes.length; i++) {
			if(i!=maxIndex && i!=minIndex){
				medIndex=i; med = arrayOfPorcentajes[i];
			}
		}

		var arrayOfEstilos = ['visual', 'auditiva', 'de escritura']

		setInStore('retencion.mayor', arrayOfEstilos[maxIndex])
		setInStore('retencion.media', arrayOfEstilos[medIndex])
		setInStore('retencion.baja', arrayOfEstilos[minIndex]) 
	}


	//falta sumar al porcentaje del kana + ir desbloqueando
	setResultadosArray(cambio: number[]) { 
		this.resultadosArray.next(cambio);
		setInStore('estilo.visual.porcentaje', cambio[0]) 
		setInStore('estilo.auditiva.porcentaje', cambio[1]) 
		setInStore('estilo.escritura.porcentaje', cambio[2])
		this.devolverRetenciones(cambio);
		

		var kanaNombre = '';
		var actualValorVecesEstudiado = 0;
		var actualValorAciertos = 0;
		var actualValorFallos = 0;
		this.getActualTemaActivado().subscribe(
		    actualTemaActivado => {
		    	kanaNombre = actualTemaActivado;
		    	
		    	actualValorVecesEstudiado = getFromStore('progreso.'+kanaNombre+'.vecesEstudiado') + 1;
		    	setInStore('progreso.'+kanaNombre+'.vecesEstudiado', actualValorVecesEstudiado);

				actualValorAciertos = getFromStore('progreso.'+kanaNombre+'.aciertos')
				actualValorFallos = getFromStore('progreso.'+kanaNombre+'.fallos')
				
				this.getAciertosValor().subscribe(
				    aciertosSuma => setInStore('progreso.'+kanaNombre+'.aciertos', actualValorAciertos+aciertosSuma)
				); 

				this.getFallosValor().subscribe(
				   	fallosSuma => setInStore('progreso.'+kanaNombre+'.fallos', actualValorFallos+fallosSuma)
				); 
				aprobarIniciado(kanaNombre);
				desbloqueaNuevo(kanaNombre);
		    }
		); 

	}


	calcularEstiloDeAprendizaje(): void {
		setIA(this.arrayOfWeights)
		var x;
		defer(async function() {
		  return await runIA();
		}).subscribe(x => this.setResultadosArray(x)) 
	}



}
