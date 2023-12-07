import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent {
  public youtubeEmbedUrl!: string;

  @Input() set videoUrl (unsafeUrl: string){
    const splittedUrl = unsafeUrl.split('?v=');

    this.youtubeEmbedUrl = splittedUrl.at(-1) || '';
  }
}
