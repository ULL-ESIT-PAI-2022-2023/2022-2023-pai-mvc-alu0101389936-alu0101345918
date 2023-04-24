/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class MusicPlayerController
  */

import { MusicPlayerModel } from './music-player-model.js';
import { MusicPlayerView } from './music-player-view.js';

/**
 * @desc Class MusicPlayerController
 * @classdesc The MusicPlayerController class is the class that controls the model and the view
 */
export class MusicPlayerController {
  private model: MusicPlayerModel;
  private view: MusicPlayerView;

  /**
   * @constructor
   * @param {MusicPlayerModel} model - The model of the music player
   * @param {MusicPlayerView} view - The view of the music player
   */
  constructor(model: MusicPlayerModel, view: MusicPlayerView) {
    this.model = model;
    this.view = view;

    this.view.registerButtonHandlers({
      onPreviousButtonClick: this.onPreviousButtonClick.bind(this),
      onPlayButtonClick: this.onPlayButtonClick.bind(this),
      onPauseButtonClick: this.onPauseButtonClick.bind(this),
      onStopButtonClick: this.onStopButtonClick.bind(this),
      onNextButtonClick: this.onNextButtonClick.bind(this)
    });

    this.view.updatePlaylist(this.model.playlist);
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistActive(this.model.currentSongIndex);
  }

  /**
   * @desc Method that plays the previous song
   */
  private onPreviousButtonClick(): void {
    this.model.playPreviousSong();
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistActive(this.model.currentSongIndex);
  }

  /**
   * @desc Method that plays the current song
   */
  private onPlayButtonClick(): void {
    this.model.play();
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistActive(this.model.currentSongIndex);
  }

  /**
   * @desc Method that pauses the current song
   */
  private onPauseButtonClick(): void {
    this.model.pause();
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistInactive();
  }

  /**
   * @desc Method that stops the current song
   */
  private onStopButtonClick(): void {
    this.model.stop();
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistActive(this.model.currentSongIndex);
  }

  /**
   * @desc Method that plays the next song
   */
  private onNextButtonClick(): void {
    this.model.playNextSong();
    this.view.updateButtonStates(this.model.isPlaying);
    this.view.updatePlaylistActive(this.model.currentSongIndex);
  }
}