import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-gustos-tabs',
  templateUrl: './gustos-tabs.component.html',
  styleUrls: ['./gustos-tabs.component.css']
})
export class GustosTabsComponent implements OnInit {

  imagenes: String = urls.thirdslide;
  @Input() tituloGusto: string = '';
  @Input() imagenUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
