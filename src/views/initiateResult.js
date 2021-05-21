import { makeRemoveResultHandler } from './removeResultHandler.js';

import { SOUND_EFFECTS_ENUM } from '../shared/enums/soundEffectsEnum.js';

function initiateResult(result, game) {
  const resultScreen = document.querySelector('div.MainContainer > section:last-of-type');
  console.log(resultScreen);

  if (result === 0) {
    resultScreen.setAttribute('class', 'Draw PlayButton')

    const drawImgContainer = document.querySelector('div.MainContainer > section:last-of-type > div');
    const drawImg1 = document.createElement('img');
    const drawImg2 = document.createElement('img');
    const drawImg3 = document.createElement('img');
    const drawImg4 = document.createElement('img');

    drawImg1.setAttribute('src', 'assets/images/draw.png');
    drawImg2.setAttribute('src', 'assets/images/draw2.jpg');
    drawImg3.setAttribute('src', 'assets/images/draw2.jpg');
    drawImg4.setAttribute('src', 'assets/images/draw.png');

    drawImgContainer.appendChild(drawImg1);
    drawImgContainer.appendChild(drawImg2);
    drawImgContainer.appendChild(drawImg3);
    drawImgContainer.appendChild(drawImg4);

    const drawAudio = new Audio(SOUND_EFFECTS_ENUM.FAILURE);
    drawAudio.play();
  }
  else {
    if (result === 1) {
      const playerCard1 = document.querySelector('div.PlayerCard');

      playerCard1.setAttribute('class', 'PlayerCard resultP1');
      resultScreen.setAttribute('class', 'Result PlayButton victoryP1')
    }
    else {
      const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');

      playerCard2.setAttribute('class', 'PlayerCard resultP2');
      resultScreen.setAttribute('class', 'Result PlayButton victoryP2')
    }

    const victoryImgContainer = document.querySelector('div.MainContainer > section:last-of-type > div');
    const victoryImg = document.querySelector('div.MainContainer > section:last-of-type > div > img');

    victoryImgContainer.setAttribute('class', '')
    victoryImg.setAttribute('class', '')

    const victoryAudio = new Audio(SOUND_EFFECTS_ENUM.SUCCESS);
    victoryAudio.play();
  }

  const playButton = document.querySelector('div.MainContainer > section:last-of-type > button');
  const playIconImg = document.querySelector('div.MainContainer > section:last-of-type > button > img');

  playButton.setAttribute('class', '');
  playIconImg.setAttribute('class', '');

  const removeResultHandler = makeRemoveResultHandler(game);

  playButton.addEventListener('click', removeResultHandler);
}

export { initiateResult };