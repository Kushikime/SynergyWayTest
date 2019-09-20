import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'synergyway';
}
