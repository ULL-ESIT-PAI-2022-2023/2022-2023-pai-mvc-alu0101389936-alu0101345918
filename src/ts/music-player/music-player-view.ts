import { Song } from './song.js';

export class MusicPlayerView {
  private previousButton: HTMLButtonElement;
  private playButton: HTMLButtonElement;
  private pauseButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;
  private playlistContainer: HTMLDivElement;
  private volumeInput: HTMLInputElement;

  constructor() {
    // Encuentra los elementos HTML necesarios
    this.previousButton = document.getElementById('previous-button') as HTMLButtonElement;
    this.playButton = document.getElementById('play-button') as HTMLButtonElement;
    this.pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
    this.stopButton = document.getElementById('stop-button') as HTMLButtonElement;
    this.nextButton = document.getElementById('next-button') as HTMLButtonElement;
    this.playlistContainer = document.querySelector('.playlist') as HTMLDivElement;
    this.volumeInput = document.querySelector('input[type="range"]') as HTMLInputElement;
  }

  // Registra los controladores de eventos para los botones
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

  // Actualiza la lista de reproducción en la vista
  public updatePlaylist(playlist: Song[]): void {
    // Limpia la lista de reproducción existente
    this.playlistContainer.innerHTML = '';

    // Crea elementos de lista para cada canción en la lista de reproducción
    playlist.forEach((song) => {
      const listItem = document.createElement('div');
      listItem.classList.add('song');
      listItem.textContent = song.title;
      this.playlistContainer.appendChild(listItem);
    });
  }

  // Actualiza el estado de los botones en la vista
  public updateButtonStates(isPlaying: boolean): void {
    if (isPlaying) {
      this.playButton.disabled = true;
      this.pauseButton.disabled = false;
      this.stopButton.disabled = false;
    } else {
      this.playButton.disabled = false;
      this.pauseButton.disabled = true;
      this.stopButton.disabled = true;
    }
  }

  // Devuelve el valor actual del control deslizante de volumen
  public getVolume(): number {
    return Number(this.volumeInput.value);
  }

  // Registra un controlador de eventos para el control deslizante de volumen
  public registerVolumeChangeHandler(handler: () => void): void {
    this.volumeInput.addEventListener('input', handler);
  }
}