import { Song } from './song.js';

export class MusicPlayerModel {

  constructor(public playlist: Song[] = [],
    public currentSongIndex: number = -1,
    public isPlaying: boolean = false) { }

  // Selecciona la siguiente canción en la lista de reproducción
  public playNextSong(): void {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
  }

  // Selecciona la canción anterior en la lista de reproducción
  public playPreviousSong(): void {
    this.currentSongIndex =
      (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length;
  }

  // Devuelve la canción actualmente seleccionada
  public getCurrentSong(): Song | undefined {
    return this.playlist[this.currentSongIndex];
  }

  // Play
  public play(): void {
    this.isPlaying = true;
  }

  // Pause
  public pause(): void {
    this.isPlaying = false;
  }

  // Stop
  public stop(): void {
    this.isPlaying = false;
    this.currentSongIndex = -1;
  }

  // SetVolume
  public setVolume(volume: number): void {
    // Establece el volumen del reproductor
  }
}