import { Component, OnInit } from '@angular/core';
import urls from 'src/app/urls.json';

@Component({
  selector: 'app-forth-slide',
  templateUrl: './forth-slide.component.html',
  styleUrls: ['./forth-slide.component.css']
})
export class ForthSlideComponent implements OnInit {

	imagenes: String = urls.forthslide;

  constructor() { }

  ngOnInit(): void {
  }

}
