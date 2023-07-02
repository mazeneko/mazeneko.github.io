import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recycle-icon',
  templateUrl: './recycle-icon.component.html'
})
export class RecycleIconComponent {
  @Input()
  width!: string
  @Input()
  height!: string
}
