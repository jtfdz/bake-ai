import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-sol-aw',
  templateUrl: './sol-aw.component.html',
  styleUrls: ['./sol-aw.component.css']
})
export class SolAwComponent implements OnInit {

  imagenes: String = urls.iniciogeneral;

  constructor() { }

  ngOnInit(): void {
  }

}
