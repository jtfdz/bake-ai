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

  	//loading los resultados para módulo finalización
	private resultadosCargando: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
	getResultadosCargando(): Observable<boolean> { return this.resultadosCargando.asObservable(); }
	setResultadosCargando(cambio:boolean) { this.resultadosCargando.next(cambio); }

	//para la barra de progreso del header para módulos
	private progresoArr: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
	getProgresoArray(): Observable<number[]> { return this.progresoArr.asObservable(); }
	setProgresoArray(cambio: number[]) { this.progresoArr.next(cambio); }

	progresoAnimacionArray: number[] = [];
	private progresoArrIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	getProgresoAvance(): Observable<number> { return this.progresoArrIndex.asObservable(); }
	setProgresoAvance(cambio: number) { 
		this.getProgresoArray().subscribe(
	     progresoArr => this.progresoAnimacionArray = progresoArr
	    ); 
		animateValue('barraDeProgreso', this.progresoAnimacionArray[this.progresoArrIndex.value], this.progresoAnimacionArray[cambio], 1000); 
		this.progresoArrIndex.next(cambio); 
	}

	//tema en curso
	private actualTemaActivado: BehaviorSubject<string> = new BehaviorSubject<string>('');

	//datos para los módulos
	private arrayOfModulos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(getFromStore('modelo.modulos'));
	private dataParaModulos: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(getFromStore('modelo.dataParaModulos'));
	getModulosAprendizaje(): Observable<string[]> { return this.arrayOfModulos.asObservable(); }
	setDataParaModulos(kana: string) { 
		this.actualTemaActivado.next(kana); 
		modeloDeAprendizaje(kana); 
		this.arrayOfModulos.next(getFromStore('modelo.modulos')); 
		this.dataParaModulos.next(getFromStore('modelo.dataParaModulos'));
		this.aciertosSuma.next(0); 
		this.fallosSuma.next(0);  
		this.weightsArray.next([]); 
	}
	getDataParaModulos(): Observable<any[]> {
	  return this.dataParaModulos.asObservable();
	}


	//arreglo[] de weights
	arrayOfWeights: string[] = [];
	private weightsArray: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	getWeightsArray(): Observable<string[]> { return this.weightsArray.asObservable(); }
	setWeightsArray(weight_nombre: string) {
		this.getWeightsArray().subscribe( weightsArray => this.arrayOfWeights = weightsArray ); 
		this.arrayOfWeights.push(weight_nombre);
		this.weightsArray.next(this.arrayOfWeights); 
	}


	//aciertos de la actual examinación
	private aciertosSuma: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private fallosSuma: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	getAciertosValor(): Observable<number> { return this.aciertosSuma.asObservable(); }
	getFallosValor(): Observable<number> { return this.fallosSuma.asObservable(); }
	setAciertoOFallo(acierto: boolean){
		var temporalValor = 0;
		if(acierto){
			this.getAciertosValor().subscribe(
		    	aciertosSuma => { temporalValor = aciertosSuma+1 }
			); 
			this.aciertosSuma.next(temporalValor); 
		}else{
			this.getFallosValor().subscribe(
		    	fallosSuma => { temporalValor = fallosSuma+1 }
			); 
			this.fallosSuma.next(temporalValor);
		}
	}


	//métodos para los resultados
	private resultadosArray: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
	getResultadosArray(): Observable<number[]> { return this.resultadosArray.asObservable(); }

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


	setResultadosArray(cambio: number[]) { 
		this.resultadosArray.next(cambio);
		setInStore('estilo.visual.porcentaje', cambio[0]) 
		setInStore('estilo.auditiva.porcentaje', cambio[1]) 
		setInStore('estilo.escritura.porcentaje', cambio[2])
		this.devolverRetenciones(cambio);
		
		var kanaNombre = this.actualTemaActivado.value;
		var actualValorVecesEstudiado = 0;
		var actualValorAciertos = 0;
		var actualValorFallos = 0;

    	actualValorVecesEstudiado = getFromStore('progreso.'+kanaNombre+'.vecesEstudiado') + 1;
    	setInStore('progreso.'+kanaNombre+'.vecesEstudiado', actualValorVecesEstudiado);

		actualValorAciertos = getFromStore('progreso.'+kanaNombre+'.aciertos')
		actualValorFallos = getFromStore('progreso.'+kanaNombre+'.fallos')
		setInStore('progreso.'+kanaNombre+'.aciertos', actualValorAciertos+this.aciertosSuma.value)
		setInStore('progreso.'+kanaNombre+'.fallos', actualValorFallos+this.fallosSuma.value)

		aprobarIniciado(kanaNombre);
		this.setResultadosCargando(false)
	}

	//el usuario responde el último módulo
	calcularEstiloDeAprendizaje(): void {
		this.setResultadosCargando(true)
		setIA(this.arrayOfWeights)
		var x;
		defer(async function() {
		  return await runIA();
		}).subscribe(x => this.setResultadosArray(x)) 
	}



}
