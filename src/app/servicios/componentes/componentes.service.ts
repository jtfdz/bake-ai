import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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

	getUsuarioIniciado(): Observable<boolean> {
	  return this.usuarioIniciado.asObservable();
	}

	setUsuarioIniciado(cambio: boolean) { this.usuarioIniciado.next(cambio); setInStore('usuario.iniciado', cambio); }

	getEstiloMayorRetencion(): Observable<string> {
	  return this.estiloMayorRetencion.asObservable();
	}





	reproducirAudio(archivo: string) { 
	  let audio = new Audio();
	  audio.src = urls.audio + '/' + archivo + '.wav';
	  audio.load();
	  audio.play();		
	}



}
