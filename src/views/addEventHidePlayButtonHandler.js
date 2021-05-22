import { makeHidePlayButtonHandler } from './hidePlayButtonHandler.js';

function addEventHidePlayButtonHandler(game) {
  const playButton = document.querySelector('section.Play > button');

  const hidePlayButtonHandler = makeHidePlayButtonHandler(game);
  playButton.addEventListener('click', hidePlayButtonHandler);
}

export { addEventHidePlayButtonHandler };