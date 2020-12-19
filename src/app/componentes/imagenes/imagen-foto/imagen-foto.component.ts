import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-imagen-foto',
  templateUrl: './imagen-foto.component.html',
  styleUrls: ['./imagen-foto.component.css']
})
export class ImagenFotoComponent implements OnInit {

  imagenes: String = urls.general;
  @Input() medida: string = '';
  @Input() imgUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
