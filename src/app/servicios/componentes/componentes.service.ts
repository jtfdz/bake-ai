import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from "rxjs/operators";
import { toRomaji } from 'wanakana';
import urls from 'src/assets/json/urls.json';
declare const getFromStore: any;
declare const setInStore: any;
declare const animateValue: any;

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

	private tituloCard: BehaviorSubject<string> = new BehaviorSubject<string>('app');
	private colorCard: BehaviorSubject<string> = new BehaviorSubject<string>('success');

	private nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>(getFromStore('usuario.nombre'));
	private usuarioIniciado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(getFromStore('usuario.iniciado'));
	private gustoUsuario: BehaviorSubject<string> = new BehaviorSubject<string>(getFromStore('usuario.gusto'));
	private estiloMayorRetencion: BehaviorSubject<string> = new BehaviorSubject<string>(getFromStore('retencion.mayor'));

	private usuarioIniciadoInicioGeneral: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(getFromStore('usuario.toursIniciados.iniciogeneral'));
	private usuarioIniciadoModulos: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(getFromStore('usuario.toursIniciados.modulos'));

	// private spinnerActivado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private audioCargando: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }

	getTituloCard(): Observable<string> {
	  return this.tituloCard.asObservable();
	}

	setTituloCard(cambio: string) { this.tituloCard.next(cambio); }

	getColorCard(): Observable<string> {
	  return this.colorCard.asObservable();
	}

	setColorCard(cambio: string) { this.colorCard.next(cambio); }


	getNombreUsuario(): Observable<string> {
	  return this.nombreUsuario.asObservable();
	}

	setNombreUsuario(cambio: string) { this.nombreUsuario.next(cambio); setInStore('usuario.nombre', cambio); }

	getGustoUsuario(): Observable<string> {
	  return this.gustoUsuario.asObservable();
	}

	setGustoUsuario(cambio: string) { this.gustoUsuario.next(cambio); setInStore('usuario.gusto', cambio); }


	getUsuarioIniciado(): Observable<boolean> {
	  return this.usuarioIniciado.asObservable();
	}

	setUsuarioIniciado(cambio: boolean) { this.usuarioIniciado.next(cambio); setInStore('usuario.iniciado', cambio); }

	getUsuarioIniciadoInicioGeneral(): Observable<boolean> {
	  return this.usuarioIniciadoInicioGeneral.asObservable();
	}

	setUsuarioIniciadoInicioGeneral(cambio: boolean) { this.usuarioIniciadoInicioGeneral.next(cambio); setInStore('usuario.toursIniciados.iniciogeneral', cambio); }

	getUsuarioIniciadoModulos(): Observable<boolean> {
	  return this.usuarioIniciadoModulos.asObservable();
	}

	setUsuarioIniciadoModulos(cambio: boolean) { this.usuarioIniciadoModulos.next(cambio); setInStore('usuario.toursIniciados.modulos', cambio); }



	getEstiloMayorRetencion(): Observable<string> {
	  return this.estiloMayorRetencion.asObservable();
	}


	getAudioCargando(): Observable<boolean> {
	  return this.audioCargando.asObservable();
	}

	setAudioCargando(cambio: boolean) { this.audioCargando.next(cambio); }


	//mejorar: make this into ONE
	//un boolean de si es palabra o kana pelao y de ahi actuar con su tertiary ?
	reproducirPalabras(archivo: string) { 
	  this.setAudioCargando(true)
	  let audio = new Audio();
	  audio.src = urls.audio + '/gustos/' +  toRomaji(archivo) + '.wav';
	  audio.load();
	  audio.play();		
	  this.setAudioCargando(false)
	}


	reproducirAudio(archivo: string) { 
	  this.setAudioCargando(true)
	  let audio = new Audio();
	  audio.src = urls.audio + '/' + archivo + '.wav';
	  audio.load();
	  audio.play();		
	  this.setAudioCargando(false)
	}

	// setActivarSpinnerPrincipal(cambio: boolean) { this.spinnerActivado.next(cambio); }

	// getActivarSpinnerPrincipal(): Observable<boolean> {
	//   this.spinnerActivado.complete();
	//   return this.spinnerActivado.pipe(share());
	// }





}
