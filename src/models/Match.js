import { generateRandomNumber } from '../shared/utils/generateRandomNumber.js';

import { WINNING_MOVES_ENUM } from '../shared/enums/winningMovesEnum.js';

class Match {
  matchId;
  player1Id;
  player2Id;
  movesByPlayers;
  turn;
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

  checkResult() {
    const markedSquares = this.movesByPlayers[0] | this.movesByPlayers[1];

    const player1FoundMatch = WINNING_MOVES_ENUM.some(combination => (combination & this.movesByPlayers[0]) === combination);

    if(player1FoundMatch) {
      return 1;
    }

    const player2FoundMatch = WINNING_MOVES_ENUM.some(combination => (combination & this.movesByPlayers[1]) === combination);

    if(player2FoundMatch) {
      return 2;
    }

    if (markedSquares === 0B111111111) {
      return 0;
    }

    console.log('Gamestate - marked squares:', markedSquares.toString(2));
    return -1;
  }
}

export { Match };