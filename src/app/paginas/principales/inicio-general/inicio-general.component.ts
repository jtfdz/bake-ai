import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import urls from 'src/assets/json/urls.json';


@Component({
  selector: 'app-inicio-general',
  templateUrl: './inicio-general.component.html',
  styleUrls: ['./inicio-general.component.css']
})
export class InicioGeneralComponent implements OnInit {

  imagenes: String = urls.iniciogeneral;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  helo(){
  	console.log('clickeddd')
  }




}
