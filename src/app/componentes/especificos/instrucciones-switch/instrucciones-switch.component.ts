import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instrucciones-switch',
  templateUrl: './instrucciones-switch.component.html',
  styleUrls: ['./instrucciones-switch.component.css']
})
export class InstruccionesSwitchComponent implements OnInit {

  @Input() tabActivada: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
