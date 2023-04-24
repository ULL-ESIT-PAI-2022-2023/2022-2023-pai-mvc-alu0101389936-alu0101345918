import { MusicPlayerModel } from "./music-player-model.js";
import { MusicPlayerView } from "./music-player-view.js";
import { MusicPlayerController } from "./music-player-controller.js";
import { Song } from './song.js';

const songs: Song[] = [
  new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 355, "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"),
  new Song("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 482, "https://www.youtube.com/watch?v=BcL---4xQYA"),
  new Song("Hotel California", "Eagles", "Hotel California", 391, "https://www.youtube.com/watch?v=mnB75CfH1jk"),
  new Song("November Rain", "Guns N' Roses", "Use Your Illusion I", 537, "https://www.youtube.com/watch?v=8SbUC-UaAxE"),
  new Song("Imagine", "John Lennon", "Imagine", 183, "https://www.youtube.com/watch?v=yRhq-yO1KN8")
];

// Crea una instancia del modelo
const model = new MusicPlayerModel(songs);

// Crea una instancia de la vista
const view = new MusicPlayerView();

// Crea una instancia del controlador y pasa la instancia del modelo y la vista como argumentos
const controller = new MusicPlayerController(model, view);