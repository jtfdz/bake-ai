import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-slide-dropdown-content',
  templateUrl: './first-slide-dropdown-content.component.html',
  styleUrls: ['./first-slide-dropdown-content.component.css']
})
export class FirstSlideDropdownContentComponent implements OnInit {

  @Input() hrefTexto: string = '';
  @Input() linkTexto: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
