import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchlistIconName'
})
export class WatchlistIconNamePipe implements PipeTransform {

  transform(isInWatchlist: boolean, isMouseHover : boolean): string {
    if (isInWatchlist && isMouseHover) return 'bookmark_remove';
    if (isInWatchlist && !isMouseHover) return 'bookmark_added';

    return 'bookmark_add';
  }

}
