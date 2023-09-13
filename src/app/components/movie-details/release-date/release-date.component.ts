import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.css'],
})
export class ReleaseDateComponent {
  @Input() releaseDate: Date | undefined;
}
