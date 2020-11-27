import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckersService {

  constructor() { }


	checkInput(inputValue: String): boolean{
		if(inputValue === ''){
			return true;
		}
		return false;
	}











}

