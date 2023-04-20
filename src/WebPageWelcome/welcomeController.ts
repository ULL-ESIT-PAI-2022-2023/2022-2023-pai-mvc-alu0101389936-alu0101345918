import { WelcomeModel } from './welcomeModel';
import { WelcomeView } from './welcomeView';

export class WelcomeController {
  model: WelcomeModel;
  view: WelcomeView;

  constructor() {
    this.model = new WelcomeModel();
    this.view = new WelcomeView();
  }

  showWelcomeMessage() {
    const message = this.model.getMessage();
    this.view.showMessage(message);
  }
};