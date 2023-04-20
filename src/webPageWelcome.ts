// Modelo
class WelcomeModel {
  getMessage() {
    return "Bienvenido a mi sitio web";
  }
}

// Vista
class WelcomeView {
  showMessage(message: string) {
    document.getElementById("message").innerText = message;
  }
}

// Controlador
class WelcomeController {
  model: WelcomeModel;
  view: WelcomeView;

  constructor(model: WelcomeModel, view: WelcomeView) {
    this.model = model;
    this.view = view;
  }

  showWelcomeMessage() {
    const message = this.model.getMessage();
    this.view.showMessage(message);
  }
}

// Uso
const model = new WelcomeModel();
const view = new WelcomeView();
const controller = new WelcomeController(model, view);
controller.showWelcomeMessage();
