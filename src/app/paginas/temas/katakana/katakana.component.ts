import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent implements OnInit {

  tablaActivada: string = 'pura';

  constructor() { }

  ngOnInit(): void {
  }


}
