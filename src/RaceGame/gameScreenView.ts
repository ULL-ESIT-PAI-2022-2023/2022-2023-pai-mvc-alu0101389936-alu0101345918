export class GameScreenView {
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