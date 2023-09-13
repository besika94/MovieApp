import { MovieCard } from './movieCard';

export interface PaginateParams {
  page: number;
  results: MovieCard[];
  total_pages: number;
  total_results: number;
}
