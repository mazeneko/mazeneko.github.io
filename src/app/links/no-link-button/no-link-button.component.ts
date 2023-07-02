import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-link-button',
  templateUrl: './no-link-button.component.html',
  styleUrls: ['./no-link-button.component.scss']
})
export class NoLinkButtonComponent {
  @Input()
  text!: string;
}
