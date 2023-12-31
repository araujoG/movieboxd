import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoPlayerComponent } from './components/youtube-video-player/youtube-video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SafeUrlPipe } from './pipes/safe-youtube-url.pipe';
import { HourWithMinutesPipe } from './pipes/hour-with-minutes.pipe';

const declarations = [
  YoutubeVideoPlayerComponent,
  SafeUrlPipe,
  HourWithMinutesPipe
]

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  declarations: [...declarations],
  exports: [...declarations]
})
export class SharedModule { }
