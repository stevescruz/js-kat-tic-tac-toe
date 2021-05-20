import { generateRandomNumber } from '../shared/utils/generateRandomNumber.js';

import { WINNING_MOVES_ENUM } from '../shared/enums/winningMovesEnum.js';

class Match {
  matchId;
  player1Id;
  player2Id;
  movesByPlayers;
  turn;
  result;
  vsAI;

  constructor(player1Id, player2Id) {
    this.matchId = generateRandomNumber(1, 10000);

    if (player1Id === player2Id) {
      throw new Error('We cannot have two players with the same id');
    }

    this.player1Id = player1Id;
    this.player2Id = player2Id;

    this.movesByPlayers = [0B000000000, 0B000000000];
    this.turn = 0;
    this.result = -1;

    this.vsAI = true;
  }

  updateBoard(position, playerNum) {
    console.log("player:", playerNum);
    console.log("position:", position);

    const move = 1 << position - 1;

    if (!this.isMoveValid(move)) {
      throw new Error('Cannot make this move. This square was already picked previously.');
    }

    const storedMoves = this.movesByPlayers[playerNum - 1];
    this.movesByPlayers[playerNum - 1] = storedMoves | move;

    console.log(`Player #${playerNum} - current move:`, move.toString(2));
    console.log(`Player #${playerNum} - all moves:`, (this.movesByPlayers[playerNum - 1]).toString(2));

    return true;
  }

  isMoveValid(move) {
    return this.movesByPlayers.every(movesByPlayer => (movesByPlayer & move) === 0B000000000);
  }

  checkPossibleMoves() {
    const possibleMoves = [];

    const completedMoves = this.movesByPlayers[0] | this.movesByPlayers[1];
    console.log('completed moves:', completedMoves.toString(2));

    for (let bit = 0; bit < 9; bit += 1) {
      const move = (completedMoves >> bit) & 0B1;

      if (move !== 0B1) {
        const position = bit + 1;
        possibleMoves.push(position);
      }
    }

    return possibleMoves;
  }

  setResult() {
    const markedSquares = this.movesByPlayers[0] | this.movesByPlayers[1];

    const player1FoundMatch = WINNING_MOVES_ENUM.some(combination => (combination & this.movesByPlayers[0]) === combination);

    if (player1FoundMatch) {
      this.result = 1;
      return;
    }

    const player2FoundMatch = WINNING_MOVES_ENUM.some(combination => (combination & this.movesByPlayers[1]) === combination);

    if (player2FoundMatch) {
      this.result = 2;
      return;
    }

    if (markedSquares === 0B111111111) {
      this.result = 0;
      return;
    }

    console.log('Gamestate - marked squares:', markedSquares.toString(2));
    this.result = -1;
    return;
  }

  pickAINextMove() {
    const possibleMoves = this.checkPossibleMoves();
  
    console.log("possible moves:", possibleMoves);
  
    const randomNumber = generateRandomNumber(0, possibleMoves.length - 1);
    const boardPosition = possibleMoves[randomNumber];
  
    console.log('random board position:', boardPosition);
  
    return boardPosition;
  }
}

export { Match };