import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  @Input() isInWatchlist = false;
  @Output() toggleInWatchlist = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  bookmarkState(): string {
    //TODO: add bookmark_added and bookmark_remove on hover
    if (this.isInWatchlist) {
      return 'bookmark_added';
    }

    return 'bookmark';
  }

  movieThumbnailAltText(): string {
    if (!this.movie.title) return 'Movie thumbnail';

    return this.movie.title + ' thumbnail';
  }

  moreDetails(movieId: string) {
    this.router.navigate(['/movies/' + movieId]);
  }

  toggleMovieInWatchlist(event: Event) {
    event.stopPropagation();

    this.toggleInWatchlist.next(this.movie.id);
  }
}
