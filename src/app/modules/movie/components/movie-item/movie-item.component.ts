import { Component, Input } from '@angular/core';
import { Movie } from '@interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() movie! : Movie;


  bookmarkState(): string {
    //TODO: add bookmark_added and bookmark_remove on hover
    return 'bookmark';
  }
}
