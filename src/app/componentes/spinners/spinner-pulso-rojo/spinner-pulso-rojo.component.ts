import { Component } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from 'rxjs/operators';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';

@Component({
  selector: 'app-spinner-pulso-rojo',
  templateUrl: './spinner-pulso-rojo.component.html',
  styleUrls: ['./spinner-pulso-rojo.component.css']
})
export class SpinnerPulsoRojoComponent{


	constructor(private router: Router, private componentesService: ComponentesService, private spinner: NgxSpinnerService) { 
	    this.router.events.subscribe((e: RouterEvent) => {
	      this.navigationInterceptor(e);
	    })
	}


  navigationInterceptor(event: RouterEvent): void{
    if(event instanceof NavigationStart){
      this.spinner.show();
    }
     if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
		setTimeout(() => {
			this.spinner.hide()
		}, 1500)
       
     }
  }



}
