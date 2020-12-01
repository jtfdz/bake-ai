import { Component, OnInit } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';

@Component({
  selector: 'app-sol-audio',
  templateUrl: './sol-audio.component.html',
  styleUrls: ['./sol-audio.component.css']
})
export class SolAudioComponent implements OnInit {

  constructor(private modulosService: ModulosService) { }

  ngOnInit(): void {
  }

}
