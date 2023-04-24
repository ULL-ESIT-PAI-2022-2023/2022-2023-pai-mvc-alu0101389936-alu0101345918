/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class MusicPlayerModel
  */

import { Song } from './song.js';

/**
 * @desc Class MusicPlayerModel
 * @classdesc The MusicPlayerModel class is the class that controls the data of the music player
 */
export class MusicPlayerModel {

  /**
   * @constructor
   * @param {Song[]} playlist - The playlist of the music player
   * @param {number} currentSongIndex - The index of the current song
   * @param {number} lastSongIndex - The index of the last song
   * @param {boolean} isPlaying - The state of the music player
   */
  constructor(public playlist: Song[] = [],
    public currentSongIndex: number = -1,
    private lastSongIndex: number = -1,
    public isPlaying: boolean = false) { }

  /**
   * @desc Method that plays the current song
   */
  public play(): void {
    this.isPlaying = true;
    this.currentSongIndex = this.lastSongIndex;
  }

  /**
   * @desc Method that pauses the current song
   */
  public pause(): void {
    this.isPlaying = false;
    this.lastSongIndex = this.currentSongIndex;
    this.currentSongIndex = -1;
  }

  /**
   * @desc Method that stops the current song
   */
  public stop(): void {
    this.isPlaying = false;
    this.lastSongIndex = this.currentSongIndex;
    this.currentSongIndex = -1;
  }

  /**
   * @desc Method that plays the next song
   */
  public playNextSong(): void {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
  }

  /**
   * @desc Method that plays the previous song
   */
  public playPreviousSong(): void {
    this.currentSongIndex =
      (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length;
  }
}
