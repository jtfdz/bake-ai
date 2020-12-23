import { Component, OnInit, Input } from '@angular/core';
declare const getEbCN: any;
declare const getEbQSA: any;
declare const getEbI: any;
declare const accessParent: any;

@Component({
  selector: 'app-tabs-teoria',
  templateUrl: './tabs-teoria.component.html',
  styleUrls: ['./tabs-teoria.component.css']
})
export class TabsTeoriaComponent implements OnInit {


  @Input() texto: string = '';
  @Input() classResto: string = '';
  @Input() tabNombre: string = '';


  constructor() { }

  ngOnInit(): void {
  }


   openTheTab(evento: any, tabName: string) {
      let tabpanel: HTMLElement[] = getEbCN('content-tab');
      let tablinks: HTMLElement[] = getEbQSA('.tabteoria');
       for (var i = 0; i < tabpanel.length; i++) {
        (tabpanel[i] as HTMLElement).style.display = "none";
       }
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" has-text-black", " has-text-"+tablinks[i].parentElement!.id);
        accessParent(tablinks[i]);
      }

       (getEbI(tabName) as HTMLElement).style.display = "block";
       let panelitself: HTMLElement = getEbI('panelitself');
       panelitself.className = 'panel has-background-white is-'+evento.currentTarget.parentElement!.id;
       evento.currentTarget.className = evento.currentTarget?.className.replace(" has-text-"+evento.currentTarget.parentElement!.id, " has-text-black");
       evento.currentTarget.parentElement.parentElement.className += " has-background-"+evento.currentTarget.parentElement!.id;   
    }







}
