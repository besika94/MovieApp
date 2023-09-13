import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginateParams } from '../models/PaginatedParams';
import { MovieCard } from '../models/movieCard';
import { Observable, map, of, tap } from 'rxjs';
import { SingleMovie } from '../models/singleMovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = environment.baseApiUrl;
  apiKey = environment.ApiKey;

  searchedMoviesCollection: MovieCard[] = [];

  moviesCollectionCache = new Map();

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<MovieCard[]> {
    if (query === '') {
      return of(this.searchedMoviesCollection);
    }

    let params = new HttpParams()
      .set('query', query)
      .set('api_key', this.apiKey);

    return this.http
      .get<PaginateParams>(this.baseUrl + 'search/movie', { params })
      .pipe(
        map((res) => {
          this.searchedMoviesCollection = res.results;
          return res.results;
        })
      );
  }

  getMovieById(movieId: number): Observable<SingleMovie> {
    const response = this.moviesCollectionCache.get(movieId.toString());
    if (response) return of(response);

    let params = new HttpParams().set('api_key', this.apiKey);

    return this.http
      .get<SingleMovie>(this.baseUrl + `movie/${movieId}`, {
        params,
      })
      .pipe(
        tap((res) => {
          this.moviesCollectionCache.set(movieId.toString(), res);
        })
      );
  }
}
