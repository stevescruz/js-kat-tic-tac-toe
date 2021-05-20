import { nextTurn } from './nextTurn.js';
import { clearBoard } from './clearBoard.js';
import { initiateResult } from './initiateResult.js';

let currentGame;

const makeMarkSquareHandler = function (game) {
  currentGame = game;
  return markSquareHandler;
}

function markSquareHandler(event) {
  const game = currentGame;
  const { match } = game;

  console.log('turn', match.turn);

  if (match.turn % 2 === 0) {
    const x = document.createElement('img');
    x.setAttribute('src', 'assets/x.svg');
    event.target.appendChild(x);
  }
  else {
    const o = document.createElement('img');
    o.setAttribute('src', 'assets/circle.svg');
    event.target.appendChild(o);
  }

  event.target.disabled = true;
  // event.target.setAttribute('type', 'button')
  // event.target.style.pointerEvents = "none";

  const squarePosition = event.target.id;
  const playerNum = match.turn % 2 === 0 ? 2 : 1;
  match.updateBoard(squarePosition, playerNum);

  match.setResult();

  console.log('board:', (match.movesByPlayers[0] | match.movesByPlayers[1]).toString(2));
  console.log('result:', match.result);

  if (match.result !== -1) {
    console.log('player #1 ended the game');
    setTimeout(() => {
      clearBoard(game);
      initiateResult(match.result, game);
    }, 250);
    return;
  }

  nextTurn(game);
}

export { makeMarkSquareHandler };