import { makeRemovePlayButtonHandler } from './removePlayButtonHandler.js';

function initializePlayButton(game) {
  const playButton = document.querySelector('section.Play > button');

  const removePlayButtonHandler = makeRemovePlayButtonHandler(game);
  playButton.addEventListener('click', removePlayButtonHandler);
}

export { initializePlayButton };