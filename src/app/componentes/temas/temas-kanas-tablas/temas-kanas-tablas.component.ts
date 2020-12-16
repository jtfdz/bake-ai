import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';
import { TemasService } from 'src/app/servicios/temas/temas.service';

type tipoCompleta = {
    letra: string;
    a: string;
    i: string;
    u: string;
    e: string;
    o: string;
}

type tipoCompuesta = {
    letra: string;
    a: string;
    u: string;
    o: string;
}

@Component({
  selector: 'app-temas-kanas-tablas',
  templateUrl: './temas-kanas-tablas.component.html',
  styleUrls: ['./temas-kanas-tablas.component.css']
})
export class TemasKanasTablasComponent implements OnInit {

  tablaActivada: string = 'pura';

  pura: tipoCompleta[] = [];
  impura: tipoCompleta[] = [];
  compuesta: tipoCompuesta[] = [];

  HeaderFooter: string[] = ['c/v', 'a', 'i', 'u', 'e', 'o']; 
  HeaderFooterCompuesta: string[] = ['c/v', '', 'a', '', '', 'u', '', '', 'o']; 

  @Input() tituloKana: string = '';
  imagenes: String = urls.iniciogeneral;

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
    this.pura = this.temasService.getTablaPura(this.tituloKana);
    this.impura = this.temasService.getTablaImpura(this.tituloKana);
    this.compuesta = this.temasService.getTablaCompuesta(this.tituloKana);
  }

  activarTabla(tipo: string): void{
    this.tablaActivada = tipo;
  }




}
