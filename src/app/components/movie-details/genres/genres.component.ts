import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/models/singleMovie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent {
  @Input() genres: Genre[] | undefined;
}
