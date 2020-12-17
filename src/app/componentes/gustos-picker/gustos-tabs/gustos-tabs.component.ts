import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gustos-tabs',
  templateUrl: './gustos-tabs.component.html',
  styleUrls: ['./gustos-tabs.component.css']
})
export class GustosTabsComponent implements OnInit {

  @Input() tituloGusto: string = '';
  @Input() imagenUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
