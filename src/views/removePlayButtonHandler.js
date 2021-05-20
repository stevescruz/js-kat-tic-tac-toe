import { startGame } from './startGame.js';

let currentGame;

const makeRemovePlayButtonHandler = function (game) {
  currentGame = game;
  return removePlayButtonHandler;
}

function removePlayButtonHandler(event) {
  const game = currentGame;

  const mainContainer = document.querySelector('div.MainContainer');
  const playScreen = document.querySelector('section.Play');

  mainContainer.removeChild(playScreen);

  startGame(game);
}

export { makeRemovePlayButtonHandler };