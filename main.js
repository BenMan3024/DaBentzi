import { GameController } from './Controller/gameController.js';

const controller = new GameController();

document.addEventListener('DOMContentLoaded', () => controller.init());
