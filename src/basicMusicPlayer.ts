// Modelo
class PlaylistModel {
    songs: string[];
    currentIndex: number;
  
    constructor(songs: string[]) {
      this.songs = songs;
      this.currentIndex = 0;
    }
  
    getCurrentSong() {
      return this.songs[this.currentIndex];
    }
  
    nextSong() {
      this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    }
  
    previousSong() {
      this.currentIndex =
        (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    }
  }
  
// Vista
class MusicPlayerView {
  songDisplay: HTMLDivElement;

  constructor() {
    this.songDisplay = document.createElement("div");
    document.body.appendChild(this.songDisplay);
  }

  displaySong(song: string) {
    this.songDisplay.innerText = song;
  }
}

// Controlador
class MusicPlayerController {
  model: PlaylistModel;
  view: MusicPlayerView;

  constructor(model: PlaylistModel, view: MusicPlayerView) {
    this.model = model;
    this.view = view;
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
}

// Uso
const playlist = new PlaylistModel(["Song 1", "Song 2", "Song 3"]);
const view = new MusicPlayerView();
const controller = new MusicPlayerController(playlist, view);
controller.playNextSong();
controller.playNextSong();
controller.playPreviousSong();