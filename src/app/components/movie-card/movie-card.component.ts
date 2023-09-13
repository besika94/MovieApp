import { Component, Input } from '@angular/core';
import { MovieCard } from 'src/app/models/movieCard';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: MovieCard | undefined;
}
