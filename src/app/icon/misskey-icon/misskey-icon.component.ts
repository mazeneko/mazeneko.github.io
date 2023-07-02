import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-misskey-icon',
  templateUrl: './misskey-icon.component.html'
})
export class MisskeyIconComponent {
  @Input()
  width!: number
  @Input()
  height!: number
}
