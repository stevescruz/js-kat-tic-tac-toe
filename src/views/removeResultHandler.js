import { startGame } from './startGame.js';

let currentGame;

const makeRemoveResultHandler = function (game) {
  currentGame = game;
  return removeResultHandler;
}

function removeResultHandler(event) {
  const game = currentGame;

  const resultScreen = document.querySelector('div.MainContainer > section:last-of-type');
  const container = document.querySelector('div.MainContainer > section:last-of-type > div');
  const images = document.querySelectorAll('div.MainContainer > section:last-of-type > div > img');
  const playButton = document.querySelector('div.MainContainer > section:last-of-type > button');
  const playIconImg = document.querySelector('div.MainContainer > section:last-of-type > button > img');

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('class', 'none');
  }

  resultScreen.setAttribute('class', 'none');
  container.setAttribute('class', 'none');
  playButton.setAttribute('class', 'none');
  playIconImg.setAttribute('class', 'none');

  playIconImg.removeEventListener('click', this);

  startGame(game);
}


export { makeRemoveResultHandler };