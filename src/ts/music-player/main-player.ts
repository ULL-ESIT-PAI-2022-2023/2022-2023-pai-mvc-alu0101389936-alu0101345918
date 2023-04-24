/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Main file
  */

import { MusicPlayerModel } from './music-player-model.js';
import { MusicPlayerView } from './music-player-view.js';
import { MusicPlayerController } from './music-player-controller.js';
import { Song } from './song.js';

function main(): void {
  const songs: Song[] = [
    { title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: 355, url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', duration: 482, url: 'https://www.youtube.com/watch?v=BcL---4xQYA' },
    { title: 'Hotel California', artist: 'Eagles', album: 'Hotel California', duration: 391, url: 'https://www.youtube.com/watch?v=mnB75CfH1jk' },  
    { title: 'November Rain', artist: 'Guns N\' Roses', album: 'Use Your Illusion I', duration: 537, url: 'https://www.youtube.com/watch?v=8SbUC-UaAxE' },
    { title: 'Imagine', artist: 'John Lennon', album: 'Imagine', duration: 183, url: 'https://www.youtube.com/watch?v=yRhq-yO1KN8' }
  ];

  const model = new MusicPlayerModel(songs, -1, 0, false);
  const view = new MusicPlayerView();
  const controller = new MusicPlayerController(model, view);
}

main();