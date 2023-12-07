import { SafeYoutubeUrlPipe } from './safe-youtube-url.pipe';

describe('SafeYoutubeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeYoutubeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
