import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-icon',
  templateUrl: './github-icon.component.html'
})
export class GithubIconComponent {
  @Input()
  width!: number
  @Input()
  height!: number
}
