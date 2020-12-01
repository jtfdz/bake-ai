import { Component, OnInit } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';

@Component({
  selector: 'app-luna-rw',
  templateUrl: './luna-rw.component.html',
  styleUrls: ['./luna-rw.component.css']
})
export class LunaRwComponent implements OnInit {

  constructor(private modulosService: ModulosService) { }

  ngOnInit(): void {
  }

}
