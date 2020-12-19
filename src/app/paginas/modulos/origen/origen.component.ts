import { Component, OnInit, Input  } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
import { TemasService } from 'src/app/servicios/temas/temas.service';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css'],
})
export class OrigenComponent implements OnInit {


  @Input() moduloActivado: string = '';
  kanasAPruebaObj: {} = {};


  constructor(private modulosService: ModulosService, private temasService: TemasService) { }

  ngOnInit(): void {
  	this.kanasAPruebaObj = this.temasService.getTablaExaminacion('hiragana');
  }


}
