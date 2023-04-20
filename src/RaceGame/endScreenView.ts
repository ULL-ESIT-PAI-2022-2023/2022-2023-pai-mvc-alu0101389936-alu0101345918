export class EndScreenView {
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