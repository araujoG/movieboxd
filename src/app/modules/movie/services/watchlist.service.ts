import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const WATCHLIST_KEY = 'movieboxd_watchlist';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService extends LocalStorageService {

  currentWatchlist$ = new BehaviorSubject<string[]>(this.getWatchlist());

  constructor() {
    super();
  }

  toggleMovieInWatchlist(movieId: string) : void {
    console.log('inside toggle');

    if(this.isMovieInWatchlist(movieId)) return this.removeMovieFromWatchlist(movieId);

    return this.addMovieToWatchlist(movieId);
  }

  private addMovieToWatchlist(movieId: string) : void {
    console.log('inside add');

    let watchlist = this.getWatchlist();

    watchlist.push(movieId);

    this.setItem(WATCHLIST_KEY, watchlist);

    this.updateWatchlistCurrentValue(watchlist);
  }

  private removeMovieFromWatchlist(movieId: string) : void {
    console.log('inside remove');

    const watchlist = this.getWatchlist().filter(element => element != movieId);

    this.setItem(WATCHLIST_KEY, watchlist);

    this.updateWatchlistCurrentValue(watchlist);
  }

  getWatchlist() : string[] {
    return (this.getItem(WATCHLIST_KEY) || []) as string[] ;
  }

  private updateWatchlistCurrentValue(watchlist : string[]) : void {
    this.currentWatchlist$.next(watchlist);
  }

  private isMovieInWatchlist(movieId: string): boolean {
    return this.getWatchlist().includes(movieId);
  }
}
