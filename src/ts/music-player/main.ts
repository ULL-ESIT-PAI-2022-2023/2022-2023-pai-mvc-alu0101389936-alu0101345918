import { MusicPlayerController } from './music-player-controller';

const controller = new MusicPlayerController(["Song 1", "Song 2", "Song 3"]);
controller.playNextSong();
controller.playNextSong();
controller.playPreviousSong();
