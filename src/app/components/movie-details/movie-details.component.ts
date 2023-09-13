import { Component, Input } from '@angular/core';
import { SingleMovie } from 'src/app/models/singleMovie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  @Input() SingleMovie: SingleMovie | undefined;
}
