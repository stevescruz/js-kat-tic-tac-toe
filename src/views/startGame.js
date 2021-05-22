import { Match } from '../models/Match.js';

import { makeMarkSquareHandler } from './markSquareHandler.js';
import { nextTurn } from './nextTurn.js';

function startGame(game) {
  game.setMatch(new Match(game.player1.id, game.player2.id));

  const board = document.querySelector('section.Board');
  const squares = document.querySelectorAll('section.Board > button.none');

  board.setAttribute('class', 'Board');

  const markSquareHandler = makeMarkSquareHandler(game);

  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute('class', 'Square');
    squares[i].setAttribute('id', i + 1);
    squares[i].addEventListener('click', markSquareHandler);
  }

  nextTurn(game);
}

export { startGame };