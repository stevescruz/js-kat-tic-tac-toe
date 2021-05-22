import { startGame } from './startGame.js';

let currentGame;

const makeHidePlayButtonHandler = function (game) {
  currentGame = game;
  return hidePlayButtonHandler;
}

function hidePlayButtonHandler(event) {
  const game = currentGame;

  const mainContainer = document.querySelector('div.MainContainer');
  const playScreen = document.querySelector('section.Play');

  mainContainer.removeChild(playScreen);

  startGame(game);
}

export { makeHidePlayButtonHandler };