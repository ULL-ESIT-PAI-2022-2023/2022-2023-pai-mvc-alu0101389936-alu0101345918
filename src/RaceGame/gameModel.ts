import { Car } from "./car";

export class GameModel {
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
};