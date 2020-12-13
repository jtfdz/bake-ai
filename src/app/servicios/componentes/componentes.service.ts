import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import urls from 'src/assets/json/urls.json';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

	private tituloCard: BehaviorSubject<string> = new BehaviorSubject<string>('app');
	private colorCard: BehaviorSubject<string> = new BehaviorSubject<string>('success');

  constructor() { }

	getTituloCard(): Observable<string> {
	  return this.tituloCard.asObservable();
	}

	setTituloCard(cambio: string) { this.tituloCard.next(cambio); }

	getColorCard(): Observable<string> {
	  return this.colorCard.asObservable();
	}

	setColorCard(cambio: string) { this.colorCard.next(cambio); }

	reproducirAudio(kana: string) { 
	  let audio = new Audio();
	  audio.src = urls.audio + '/' + kana + '.wav';
	  audio.load();
	  audio.play();		
	}



}
