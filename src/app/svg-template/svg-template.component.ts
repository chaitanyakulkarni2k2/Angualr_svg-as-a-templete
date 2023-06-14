import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-template',
  templateUrl: './svg-template.component.html',
  styleUrls: ['./svg-template.component.css']
})
export class SvgTemplateComponent {
  @Input() width = 200;
  @Input() height = 100;
  @Input() fillColor = 'blue';
}
