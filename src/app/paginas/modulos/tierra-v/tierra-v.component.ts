import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tierra-v',
  templateUrl: './tierra-v.component.html',
  styleUrls: ['./tierra-v.component.css']
})
export class TierraVComponent implements OnInit {

  @Input() dataTierra: any[] = [];

  constructor() { }

  ngOnInit(): void {
  	console.log(this.dataTierra)
  }

}
