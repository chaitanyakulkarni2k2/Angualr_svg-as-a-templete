import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templates = [
    { width: 200, height: 100, fillColor: 'blue' },
    { width: 300, height: 150, fillColor: 'red' },
    { width: 150, height: 75, fillColor: 'green' }
  ];
}