import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(
    private movieService: MovieService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (params) => this.getMovie(params['id']),
    });
  }

  getMovie(id: string) {
    this.movieService.getMovieById(+id).subscribe({
      next: (res) => (this.movie = res),
      error: () => (this.movie = {}),
    });
  }
}
