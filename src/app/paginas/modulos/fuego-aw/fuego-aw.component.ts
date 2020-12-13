import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-fuego-aw',
  templateUrl: './fuego-aw.component.html',
  styleUrls: ['./fuego-aw.component.css']
})
export class FuegoAwComponent implements OnInit {


  imagenes: String = urls.iniciogeneral;

  constructor() { }

  ngOnInit(): void {
  }

}
