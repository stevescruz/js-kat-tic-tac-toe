import { generateRandomNumber } from '../shared/utils/generateRandomNumber.js';

import { checkAINextMove } from './checkAINextMove.js';

function pickAIMove(match) {
  const possibleMoves = checkAINextMove(match);

  console.log("possible moves:", possibleMoves);

  const randomNumber = generateRandomNumber(0, possibleMoves.length - 1);
  const boardPosition = possibleMoves[randomNumber];

  console.log('random board position:', boardPosition);

  return boardPosition;
}

export { pickAIMove };