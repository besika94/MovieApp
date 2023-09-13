import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCard } from 'src/app/models/movieCard';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  movies: MovieCard[] = [];

  constructor(private router: Router, private movieService: MovieService) {}
  ngOnInit(): void {
    this.onSearchMovie();
  }

  onSearchMovie() {
    this.movieService.searchMovies(this.searchTerm).subscribe({
      next: (res) => {
        this.movies = res;
        this.searchTerm = '';
      },
      error: () => {
        this.movies = [];
        this.searchTerm = '';
      },
    });
  }

  onMovieCard(movieId: number) {
    this.router.navigateByUrl(`movie/${movieId}`);
  }
}
