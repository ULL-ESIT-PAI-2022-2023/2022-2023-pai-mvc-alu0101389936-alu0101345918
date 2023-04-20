import { PlaylistModel } from './playlistModel';
import { MusicPlayerView } from './musicPlayerView';

export class MusicPlayerController {
  model: PlaylistModel;
  view: MusicPlayerView;

  constructor(songs: string[]) {
    this.model = new PlaylistModel(songs);
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