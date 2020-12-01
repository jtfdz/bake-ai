import { Component } from '@angular/core';
import { slider, fader } from 'src/assets/js-ts/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slider ]
})
export class AppComponent {
  title = 'bakeai';
}
