import { GameModel } from "./gameModel";
import { StartScreenView } from "./startScreenView";
import { GameScreenView } from "./gameScreenView";
import { EndScreenView } from "./endScreenView";

export class GameController {
  model: GameModel;
  startScreenView: StartScreenView;
  gameScreenView: GameScreenView;
  endScreenView: EndScreenView;
  constructor() {
    this.model = new GameModel();
    this.startScreenView = new StartScreenView();
    this.gameScreenView = new GameScreenView();
    this.endScreenView = new EndScreenView();
    this.startScreenView.onStart(() => this.startGame());
  }

  startGame() {
    this.startScreenView.detach();
    this.gameScreenView.attach(document.body);
    this.model.start();
    this.gameLoop();
  }

  endGame() {
    this.gameScreenView.detach();
    this.endScreenView.attach(document.body);
    this.endScreenView.setScore(this.model.score);
  }

  gameLoop() {
    this.model.update();
    this.gameScreenView.drawCars(this.model.cars);
    this.gameScreenView.setScore(this.model.score);
    if (this.model.score > 100) {
      this.endGame();
    } else {
      requestAnimationFrame(() => this.gameLoop());
    }
  }

  start() {
    this.startScreenView.attach(document.body);
  }
}