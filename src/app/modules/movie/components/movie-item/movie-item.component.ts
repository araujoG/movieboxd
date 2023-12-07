import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() movie!: Movie;


  constructor(
    private router: Router
  ) { }

  bookmarkState(): string {
    //TODO: add bookmark_added and bookmark_remove on hover
    return 'bookmark';
  }

  movieThumbnailAltText(): string {
    if (!this.movie.title) return 'Movie thumbnail';

    return this.movie.title + ' thumbnail';
  }

  moreDetails(movieId: string) {
    this.router.navigate(['/movies/' + movieId]);
  }

  logga(event: Event) {
    event.stopPropagation();

    // TODO: add watchlist service w local storage
  }
}
