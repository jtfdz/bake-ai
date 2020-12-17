import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-imagen-figure',
  templateUrl: './imagen-figure.component.html',
  styleUrls: ['./imagen-figure.component.css']
})
export class ImagenFigureComponent implements OnInit {

  imagenes: String = urls.general;
  @Input() medida: string = '';
  @Input() imgUrl: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
