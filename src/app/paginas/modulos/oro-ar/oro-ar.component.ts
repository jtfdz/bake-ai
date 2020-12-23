import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oro-ar',
  templateUrl: './oro-ar.component.html',
  styleUrls: ['./oro-ar.component.css']
})
export class OroArComponent implements OnInit {

  @Input() dataOro: any[] = [];

  constructor() { }

  ngOnInit(): void {
  	console.log(this.dataOro)
  }

}
