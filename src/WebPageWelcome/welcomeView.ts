export class WelcomeView {
  showMessage(message: string) {
    document.getElementById("message").innerText = message;
  }
};