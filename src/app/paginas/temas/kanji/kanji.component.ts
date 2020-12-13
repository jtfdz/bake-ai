import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';


@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.css']
})
export class KanjiComponent implements OnInit {

  imagenes: String = urls.iniciogeneral;
  
  constructor() { }

  ngOnInit(): void {
  }

}
