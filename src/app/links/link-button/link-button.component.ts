import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button[text][url]',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
  @Input()
  text!: string;
  @Input()
  url!: string;
}
