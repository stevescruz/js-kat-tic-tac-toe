import { Player } from './models/Player.js';
import { Score } from './models/Score.js';
import { Game } from './models/Game.js';

import { showPlayerCards } from './views/showPlayerCards.js';
import { addEventHidePlayButtonHandler } from './views/addEventHidePlayButtonHandler.js';

function init() {
  const player1 = new Player();
  const player2 = new Player();

  const score = new Score();

  const game = new Game(player1, player2, score);

  showPlayerCards(player1, player2);
  addEventHidePlayButtonHandler(game);
}

export { init };