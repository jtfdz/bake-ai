import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

	imagenes: String = urls.iniciogeneral;



  constructor() { }

  ngOnInit(): void {
  }

}
