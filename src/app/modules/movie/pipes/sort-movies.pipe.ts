import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '@interfaces/movie';
import { SortingOptions } from '../enums/sorting-options';

@Pipe({
  name: 'sortMovies'
})
export class SortMoviesPipe implements PipeTransform {

  transform(movies: Movie[] | null, sortOption?: SortingOptions | null): Movie[] {
    if (!movies) return [];
    return [...movies].sort((movieA: Movie, movieB: Movie) => {
      switch (sortOption) {
        case SortingOptions.RELEASE_DATE:
          return this.sortingByReleaseDate(movieA, movieB);
        case SortingOptions.RATING:
          return this.sortingByRating(movieA, movieB);
        default:
          return this.sortingByTitle(movieA, movieB);
      }
    });
  }

  sortingByRating(movieA: Movie, movieB: Movie) : number {
    console.log(movieA.rating, movieB.rating);

    if (movieA.rating < movieB.rating) return 1;
    if (movieA.rating > movieB.rating) return -1;
    return 0
  }

  sortingByTitle(movieA: Movie, movieB: Movie) : number {
    if (movieA.title < movieB.title) return -1;
    if (movieA.title > movieB.title) return 1;
    return 0
  }

  sortingByReleaseDate(movieA: Movie, movieB: Movie) : number {
    if (movieA.releasedDate < movieB.releasedDate) return -1;
    if (movieA.releasedDate > movieB.releasedDate) return 1;
    return 0
  }

}
