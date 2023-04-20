import { WelcomeModel } from "./welcomeModel";
import { WelcomeView } from "./welcomeView";
import { WelcomeController } from "./welcomeController";

const model = new WelcomeModel();
const view = new WelcomeView();
const controller = new WelcomeController(model, view);
controller.showWelcomeMessage();