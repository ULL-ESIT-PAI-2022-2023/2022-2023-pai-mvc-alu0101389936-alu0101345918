export class StartScreenView {
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
};