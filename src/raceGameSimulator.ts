// Modelo

class Car {
  x: number;
  y: number;
  speed: number;
  direction: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.direction = 0;
  }
}

class GameModel {
  cars: Car[];
  started: boolean;
  score: number;
  constructor() {
    this.cars = [new Car(100, 100), new Car(300, 100)];
    this.started = false;
    this.score = 0;
  }
  update() {
    if (!this.started) {
      return;
    }
    // Actualizar la posición de los coches
    for (const car of this.cars) {
      const angle = car.direction * Math.PI / 180;
      car.x += car.speed * Math.sin(angle);
      car.y -= car.speed * Math.cos(angle);
    }
    // Actualizar la puntuación
    this.score += 1;
  }
  start() {
    this.started = true;
  }
  reset() {
    this.cars = [new Car(100, 100), new Car(300, 100)];
    this.started = false;
    this.score = 0;
  }
}

// Vista

class StartScreenView {
  container: HTMLElement;
  startButton: HTMLElement;
  constructor() {
    this.container = document.createElement("div");
    this.container.style.display = "flex";
    this.container.style.flexDirection = "column";
    this.container.style.alignItems = "center";
    this.container.style.justifyContent = "center";
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.background = "#333";

    const title = document.createElement("h1");
    title.innerText = "Carrera";

    this.startButton = document.createElement("button");
    this.startButton.innerText = "Empezar";
    this.startButton.style.fontSize = "32px";
    this.startButton.style.padding = "16px";

    this.container.appendChild(title);
    this.container.appendChild(this.startButton);
  }
  attach(parent: HTMLElement) {
    parent.appendChild(this.container);
  }
  detach() {
    this.container.parentNode.removeChild(this.container);
  }
  onStart(callback: () => void) {
    this.startButton.addEventListener("click", callback);
  }
}

class GameScreenView {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  scoreDisplay: HTMLElement;
  constructor() {
    this.container = document.createElement("div");
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.background = "#eee";
    this.canvas = document.createElement("canvas");
    this.canvas.width = 800;
    this.canvas.height = 600;

    this.scoreDisplay = document.createElement("div");
    this.scoreDisplay.style.fontSize = "32px";
    this.scoreDisplay.style.padding = "16px";

    this.container.appendChild(this.canvas);
    this.container.appendChild(this.scoreDisplay);

    this.context = this.canvas.getContext("2d");
  }

  attach(parent: HTMLElement) {
    parent.appendChild(this.container);
  }

  detach() {
    this.container.parentNode.removeChild(this.container);
  }

  drawCars(cars: Car[]) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const car of cars) {
      this.context.beginPath();
      this.context.arc(car.x, car.y, 20, 0, 2 * Math.PI);
      this.context.fillStyle = "red";
      this.context.fill();
    }
  }

  setScore(score: number) {
    this.scoreDisplay.innerText = score.toString();
  }
}

class EnsScreenView {
  container: HTMLElement;
  scoreDisplay: HTMLElement;
  constructor() {
    this.container = document.createElement("div");
    this.container.style.display = "flex";
    this.container.style.flexDirection = "column";
    this.container.style.alignItems = "center";
    this.container.style.justifyContent = "center";
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.background = "#333";

    const title = document.createElement("h1");
    title.innerText = "Fin de la carrera";

    this.scoreDisplay = document.createElement("div");
    this.scoreDisplay.style.fontSize = "32px";
    this.scoreDisplay.style.padding = "16px";

    this.container.appendChild(title);
    this.container.appendChild(this.scoreDisplay);
  }

  attach(parent: HTMLElement) {
    parent.appendChild(this.container);
  }

  detach() {
    this.container.parentNode.removeChild(this.container);
  }

  setScore(score: number) {
    this.scoreDisplay.innerText = score.toString();
  }
}

// Controlador

class GameController {
  model: GameModel;
  startScreenView: StartScreenView;
  gameScreenView: GameScreenView;
  endScreenView: EnsScreenView;
  constructor() {
    this.model = new GameModel();
    this.startScreenView = new StartScreenView();
    this.gameScreenView = new GameScreenView();
    this.endScreenView = new EnsScreenView();
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

const model = new GameModel();
const startScreenView = new StartScreenView();
const gameScreenView = new GameScreenView();
const endScreenView = new EnsScreenView();

const controller = new GameController();

startScreenView.attach(document.body);