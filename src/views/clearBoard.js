import { makeMarkSquareHandler } from './markSquareHandler.js';

function clearBoard(game) {
  const board = document.querySelector('section.Board');
  const squares = document.querySelectorAll('section.Board > button.Square');
  const playerCard1 = document.querySelector('div.PlayerCard');
  const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');

  board.setAttribute('class', 'Board none');
  playerCard1.setAttribute('class', 'PlayerCard');
  playerCard2.setAttribute('class', 'PlayerCard');

  for (let i = 0; i < squares.length; i++) {
    const mark = document.querySelector(`.Square#\\3${i + 1} > img`);
    if (mark) {
      squares[i].removeChild(mark);
    }

    const markSquareHandler = makeMarkSquareHandler(game);

    squares[i].disabled = false;
    squares[i].setAttribute('class', 'none');
    squares[i].removeEventListener('click', markSquareHandler);
  }
}

export { clearBoard };