import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discord-icon',
  templateUrl: './discord-icon.component.html'
})
export class DiscordIconComponent {
  @Input()
  width!: number
  @Input()
  height!: number
}
