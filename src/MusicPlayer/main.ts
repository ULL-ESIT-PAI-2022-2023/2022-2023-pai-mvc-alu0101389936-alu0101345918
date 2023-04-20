import { PlaylistModel } from "./playlistModel";
import { MusicPlayerView } from './musicPlayerView';
import { MusicPlayerController } from './musicPlayerController';

const playlist = new PlaylistModel(["Song 1", "Song 2", "Song 3"]);
const view = new MusicPlayerView();
const controller = new MusicPlayerController(playlist, view);
controller.playNextSong();
controller.playNextSong();
controller.playPreviousSong();
