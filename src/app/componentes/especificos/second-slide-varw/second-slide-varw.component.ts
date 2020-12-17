import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-slide-varw',
  templateUrl: './second-slide-varw.component.html',
  styleUrls: ['./second-slide-varw.component.css']
})
export class SecondSlideVarwComponent implements OnInit {

  @Input() imgUrl: string = '';
  @Input() subTexto: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
