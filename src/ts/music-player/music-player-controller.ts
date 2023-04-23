import { MusicPlayerModel } from './music-player-model';
import { MusicPlayerView } from './music-player-view';

export class MusicPlayerController {
  model: MusicPlayerModel;
  view: MusicPlayerView;

  constructor(songs: string[]) {
    this.model = new MusicPlayerModel(songs);
    this.view = new MusicPlayerView();
    this.view.displaySong(this.model.getCurrentSong());
  }

  playNextSong() {
    this.model.nextSong();
    this.view.displaySong(this.model.getCurrentSong());
  }

  playPreviousSong() {
    this.model.previousSong();
    this.view.displaySong(this.model.getCurrentSong());
  }
};