import { clearBoard } from './clearBoard.js';
import { initiateResult } from './initiateResult.js';

function nextTurn(game) {
  const { match } = game;

  const playerCard1 = document.querySelector('div.PlayerCard');
  const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');

  match.turn += 1;

  if (match.turn === 1 || match.turn === 0) {
    playerCard1.setAttribute('class', 'PlayerCard turn');
  }
  else if (match.turn % 2 === 0) {
    playerCard1.setAttribute('class', 'PlayerCard');
    playerCard2.setAttribute('class', 'PlayerCard turn');

    if (match.vsAI) {
      const move = match.pickAINextMove();

      const square = document.querySelector(`button#\\3${move}`)
      const x = document.createElement('img');

      x.setAttribute('src', 'assets/x.svg');
      square.appendChild(x);
      square.disabled = true

      match.updateBoard(move.toString(), 2);

      console.log('move:', move);
      console.log(('board:', match.movesByPlayers[0] | match.movesByPlayers[1]).toString(2));

      const result = match.checkResult();

      console.log('result:', result);

      if (result !== -1) {
        console.log('player #2 ended the game');
        setTimeout(() => {
          clearBoard(game);
          initiateResult(result, game);
        }, 250);
        return;
      }

      nextTurn(game);
    }
  }
  else {
    playerCard2.setAttribute('class', 'PlayerCard');
    playerCard1.setAttribute('class', 'PlayerCard turn');
  }
}

export { nextTurn };