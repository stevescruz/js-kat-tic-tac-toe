import { clearGameBoard } from './clearGameBoard.js';
import { showResult } from './showResult.js';

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
      x.setAttribute('draggable', false);

      x.setAttribute('src', 'assets/images/x.svg');
      square.appendChild(x);
      square.disabled = true
      match.updateBoard(move.toString(), 2);

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
  }
  else {
    playerCard2.setAttribute('class', 'PlayerCard');
    playerCard1.setAttribute('class', 'PlayerCard turn');
  }
}

export { nextTurn };