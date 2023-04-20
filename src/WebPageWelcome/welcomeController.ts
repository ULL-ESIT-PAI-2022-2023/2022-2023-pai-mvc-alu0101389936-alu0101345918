import { WelcomeModel } from './welcomeModel';
import { WelcomeView } from './welcomeView';

export class WelcomeController {
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
};