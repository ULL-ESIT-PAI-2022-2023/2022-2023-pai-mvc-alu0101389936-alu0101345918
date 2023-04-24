/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class MusicPlayerView
  */

import { Song } from './song.js';

/**
 * @desc Class MusicPlayerView
 * @classdesc The MusicPlayerView class is the class that controls the view of the music player
 */
export class MusicPlayerView {
  private previousButton: HTMLButtonElement;
  private playButton: HTMLButtonElement;
  private pauseButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;
  private playlistContainer: HTMLDivElement;

  /**
   * @constructor
   */
  constructor() {
    this.previousButton = document.getElementById('previous-button') as HTMLButtonElement;
    this.playButton = document.getElementById('play-button') as HTMLButtonElement;
    this.pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
    this.stopButton = document.getElementById('stop-button') as HTMLButtonElement;
    this.nextButton = document.getElementById('next-button') as HTMLButtonElement;
    this.playlistContainer = document.querySelector('.playlist') as HTMLDivElement;
  }

  /**
   * @desc Method that registers the button handlers
   * @param {Object} handlers - The handlers of the buttons
   */
  public registerButtonHandlers(handlers: {
    onPreviousButtonClick: () => void;
    onPlayButtonClick: () => void;
    onPauseButtonClick: () => void;
    onStopButtonClick: () => void;
    onNextButtonClick: () => void;
  }): void {
    this.previousButton.addEventListener('click', handlers.onPreviousButtonClick);
    this.playButton.addEventListener('click', handlers.onPlayButtonClick);
    this.pauseButton.addEventListener('click', handlers.onPauseButtonClick);
    this.stopButton.addEventListener('click', handlers.onStopButtonClick);
    this.nextButton.addEventListener('click', handlers.onNextButtonClick);
  }

  /**
   * @desc Method that updates the playlist
   * @param {Song[]} playlist - The playlist
   */
  public updatePlaylist(playlist: Song[]): void {
    this.playlistContainer.innerHTML = '';
    playlist.forEach((song) => {
      const listItem = document.createElement('div');
      listItem.classList.add('song');
      listItem.textContent = song.title;
      this.playlistContainer.appendChild(listItem);
    });
  }

  /**
   * @desc Method that updates the button states
   * @param {boolean} isPlaying - The state of the player
   */
  public updateButtonStates(isPlaying: boolean): void {
    if (isPlaying) {
      this.playButton.disabled = true;
      this.pauseButton.disabled = false;
      this.stopButton.disabled = false;
      this.previousButton.disabled = false;
      this.nextButton.disabled = false;
    } else {
      this.playButton.disabled = false;
      this.pauseButton.disabled = true;
      this.stopButton.disabled = true;
      this.previousButton.disabled = true;
      this.nextButton.disabled = true;
    }
  }

  /**
   * @desc Method that updates the playlist active
   * @param {number} currentSongIndex - The index of the current song 
   */
  public updatePlaylistActive(currentSongIndex: number): void {
    const listItemsInactive = document.querySelectorAll('.inactive');
    listItemsInactive.forEach((item) => {
      if (item.classList.contains('inactive')) {
        item.classList.replace('inactive', 'song');
      }
    });
    const listItemsActive = document.querySelectorAll('.active');
    listItemsActive.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.replace('active', 'song');
      }
    });
    const listItems = document.querySelectorAll('.song');
    listItems[currentSongIndex].classList.replace('song', 'active');
  }
  
  /**
   * @desc Method that updates the playlist inactive
   * @param {number} currentSongIndex - The index of the current song
   */
  public updatePlaylistInactive(): void {
    const listItems = document.querySelectorAll('.active');
    listItems[0].classList.replace('active', 'inactive');
  }
}