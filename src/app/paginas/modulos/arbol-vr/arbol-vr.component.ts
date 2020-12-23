import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arbol-vr',
  templateUrl: './arbol-vr.component.html',
  styleUrls: ['./arbol-vr.component.css']
})
export class ArbolVrComponent implements OnInit {

  @Input() dataArbol: any[] = [];
  randomize: string[] = [];

  constructor() { }

  ngOnInit(): void {
  	console.log(this.dataArbol)
  }

}
