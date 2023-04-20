import { StartScreenView } from './startScreenView';
import { GameController } from './gameController';

const startScreenView = new StartScreenView();
const controller = new GameController();
startScreenView.attach(document.body);
