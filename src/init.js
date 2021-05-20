import { Player } from './models/Player.js';
import { Score } from './models/Score.js';
import { Game } from './models/Game.js';

import { initializePlayers } from './views/initiatePlayers.js';
import { initializePlayButton } from './views/initializePlayButton.js';

function init() {
  const player1 = new Player();
  const player2 = new Player();

  const score = new Score();

  const game = new Game(player1, player2, score);

  initializePlayers(player1, player2);
  initializePlayButton(game);
}

export { init };