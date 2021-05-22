import { nextTurn } from './nextTurn.js';
import { clearGameBoard } from './clearGameBoard.js';
import { showResult } from './showResult.js';

import { SOUND_EFFECTS_ENUM } from '../shared/enums/soundEffectsEnum.js';

let currentGame;

const makeMarkSquareHandler = function (game) {
  currentGame = game;
  return markSquareHandler;
}

function markSquareHandler(event) {
  const game = currentGame;
  const { match } = game;

  if (match.turn % 2 === 0) {
    const x = document.createElement('img');
    x.setAttribute('src', 'assets/images/x.svg');
    x.setAttribute('draggable', false);
    event.target.appendChild(x);
  }
  else {
    const o = document.createElement('img');
    o.setAttribute('src', 'assets/images/circle.svg');
    o.setAttribute('draggable', false);
    event.target.appendChild(o);
  }
  event.target.disabled = true;
  // event.target.setAttribute('type', 'button')
  // event.target.style.pointerEvents = "none";

  const selectAudio = new Audio(SOUND_EFFECTS_ENUM.SELECT);
  selectAudio.play();

  const squarePosition = event.target.id;
  const playerNum = match.turn % 2 === 0 ? 2 : 1;
  match.updateBoard(squarePosition, playerNum);

  match.setResult();
  if (match.result !== -1) {
    setTimeout(() => {
      clearGameBoard(game);
      showResult(match.result, game);
    }, 250);
    return;
  }

  nextTurn(game);
}

export { makeMarkSquareHandler };