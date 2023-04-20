export class MusicPlayerView {
  songDisplay: HTMLDivElement;

  constructor() {
    this.songDisplay = document.createElement("div");
    document.body.appendChild(this.songDisplay);
  }

  displaySong(song: string) {
    this.songDisplay.innerText = song;
  }
};