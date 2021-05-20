class Game {
  constructor(player1, player2, score) {
    this.player1 = player1;
    this.player2 = player2;
    this.score = score;
    this.match = null;
  }

  setMatch(match) {
    this.match = match;
  }
}

export { Game };