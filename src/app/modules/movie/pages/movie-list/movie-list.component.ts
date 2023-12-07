import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies$ = this.movieService.getAllMovies();
  currentWatchList : string[] = [];
  ngUnsubscribe = new Subject<void>();

  constructor(
    private movieService : MovieService,
    private watchlistService: WatchlistService
  ) { }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.addWatchlistChangeListener();
  }

  addWatchlistChangeListener() : void {
    this.watchlistService.currentWatchlist$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe({
      next: (watchlist : string[]) => {
        this.currentWatchList = watchlist;
      }
    })
  }

  handleWatchlistMovieToggle(movieId: string) :void {
    this.watchlistService.toggleMovieInWatchlist(movieId);
  }

  isMovieInWatchlist(movieId : string) : boolean {
    return this.currentWatchList.includes(movieId);
  }
}
