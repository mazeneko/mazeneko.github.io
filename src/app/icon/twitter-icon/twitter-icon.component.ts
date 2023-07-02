import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-icon[width][height]',
  templateUrl: './twitter-icon.component.html',
})
export class TwitterIconComponent {
  @Input()
  width!: number
  @Input()
  height!: number
}
