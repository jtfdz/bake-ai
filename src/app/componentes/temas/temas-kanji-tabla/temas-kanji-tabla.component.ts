import { Component, OnInit } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';

type lecturasKun = {
  kana: string, 
  kanaExtra: string
}

type lecturasOn = {
  kana: string
}

type kanjiType = {
  kanji: string,
  lecturaskunyomi: lecturasKun[],
  lecturasonyomi: lecturasOn[],
  numeroDeTrazos: number,
  traduccion: string
}

type Nnivel = {
  'n5': kanjiType[],
  'n4': kanjiType[],
  'n3': kanjiType[],
  'n2': kanjiType[],
  'n1': kanjiType[]
}

interface IndexStr {
  [index: string]: kanjiType[];
}


@Component({
  selector: 'app-temas-kanji-tabla',
  templateUrl: './temas-kanji-tabla.component.html',
  styleUrls: ['./temas-kanji-tabla.component.css']
})
export class TemasKanjiTablaComponent implements OnInit {

  tablaNivel: Nnivel = {'n5': [], 'n4': [], 'n3': [], 'n2': [], 'n1': []};
  tablaNivelIndex: IndexStr = this.tablaNivel;
  tablaNivelArray: kanjiType[] = [];
  HeaderFooter: string[] = ['kanji', 'traducción', 'kunyomi', 'onyomi', 'trazos']; 
  nivelElegido: string = 'n5';


//   tableData = columns.reduce((acc, col, i) => {
//     if (i % 2 == 0) {
//         acc.push({column1: col});
//     } else {
//         acc[acc.length - 1].column2 = col;
//     }       
//     return acc;
// }, []);

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
    this.tablaNivel = this.temasService.getKanjis();
    this.tablaNivelIndex = this.tablaNivel;
    this.tablaNivelArray = this.tablaNivelIndex['n5'];

  }

  activarTabla(nombreNivel: string){
    this.tablaNivelArray = this.tablaNivelIndex[nombreNivel];
    this.nivelElegido = nombreNivel;
  }

}
