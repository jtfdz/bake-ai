import { Component, OnInit } from '@angular/core';
import { PrimerInicioService } from './primer-inicio.service';


@Component({
  selector: 'app-primer-inicio',
  templateUrl: './primer-inicio.component.html',
  styleUrls: ['./primer-inicio.component.css']
})
export class PrimerInicioComponent implements OnInit {

	constructor(private primerInicioService: PrimerInicioService) { }

	show2: boolean = false;
	show3: boolean = false;
	show4: boolean = false;



	ngOnInit(): void {
		this.primerInicioService.getShow2().subscribe(
           show2 => this.show2 = show2
        );
		this.primerInicioService.getShow3().subscribe(
           show3 => this.show3 = show3
        );
		this.primerInicioService.getShow4().subscribe(
           show4 => this.show4 = show4
        );
	}




}
