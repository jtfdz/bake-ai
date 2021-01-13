import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimerInicioService {

	private isShow2: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private isShow3: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private isShow4: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor() {}

	getShow2(): Observable<boolean> {
	  return this.isShow2.asObservable();
	}

	getShow3(): Observable<boolean> {
	  return this.isShow3.asObservable();
	}

	getShow4(): Observable<boolean> {
	  return this.isShow4.asObservable();
	}




	setShow2() { this.isShow2.next(true); }
	setShow3() { this.isShow3.next(true); }
 	setShow4() { this.isShow4.next(true); }



}
