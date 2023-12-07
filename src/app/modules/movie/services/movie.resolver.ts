import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './movie.service';
import { inject } from '@angular/core';
import { Observable, filter, first, take, tap } from 'rxjs';
import { Movie } from '@interfaces/movie';

export const movieResolver: ResolveFn<Movie> = (
  route: ActivatedRouteSnapshot,
  state : RouterStateSnapshot,
  movieService: MovieService = inject(MovieService)
  ) : Observable<Movie> => movieService.getMovieById(route.paramMap.get("movie-id")!).pipe(
    filter<Movie>((movie: Movie) => !!movie),
    first()
  )