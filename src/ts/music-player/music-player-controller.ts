import { MusicPlayerModel } from './music-player-model.js';
import { MusicPlayerView } from './music-player-view.js';

export class MusicPlayerController {
  private model: MusicPlayerModel;
  private view: MusicPlayerView;

  constructor(model: MusicPlayerModel, view: MusicPlayerView) {
    this.model = model;
    this.view = view;

    // Registra los controladores de eventos en la vista
    this.view.registerButtonHandlers({
      onPreviousButtonClick: this.onPreviousButtonClick.bind(this),
      onPlayButtonClick: this.onPlayButtonClick.bind(this),
      onPauseButtonClick: this.onPauseButtonClick.bind(this),
      onStopButtonClick: this.onStopButtonClick.bind(this),
      onNextButtonClick: this.onNextButtonClick.bind(this)
    });

    // Registra el controlador de eventos en el control deslizante de volumen
    this.view.registerVolumeChangeHandler(this.onVolumeChange.bind(this));

    // Actualiza la vista con el estado inicial del modelo
    this.view.updatePlaylist(this.model.playlist);
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onPreviousButtonClick(): void {
    this.model.playPreviousSong();
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onPlayButtonClick(): void {
    this.model.play();
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onPauseButtonClick(): void {
    this.model.pause();
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onStopButtonClick(): void {
    this.model.stop();
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onNextButtonClick(): void {
    this.model.playNextSong();
    this.view.updateButtonStates(this.model.isPlaying);
  }

  private onVolumeChange(): void {
    const volume = this.view.getVolume();
    this.model.setVolume(volume);
  }
}