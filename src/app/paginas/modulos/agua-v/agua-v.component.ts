import { Component, OnInit } from '@angular/core';
declare const getEbI: any;

@Component({
  selector: 'app-agua-v',
  templateUrl: './agua-v.component.html',
  styleUrls: ['./agua-v.component.css']
})
export class AguaVComponent implements OnInit {

  table: HTMLTableElement = getEbI("hiraganaTabla");




  constructor() { }

  ngOnInit(): void {











  }

}
