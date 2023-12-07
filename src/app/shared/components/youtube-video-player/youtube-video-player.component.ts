import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent {
  public youtubeEmbedUrl!: string;

  @Input() set videoUrl (unsafeUrl: string){
    const splittedUrl = unsafeUrl.split('?v=');
    const videoId = splittedUrl.at(-1) || '';

    this.youtubeEmbedUrl = 'https://www.youtube.com/embed/' + videoId;
  }
}
