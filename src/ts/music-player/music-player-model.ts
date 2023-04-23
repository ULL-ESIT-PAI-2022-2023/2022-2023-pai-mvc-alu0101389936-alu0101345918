export class MusicPlayerModel {
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
};