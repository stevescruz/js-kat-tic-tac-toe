function checkAINextMove(match) {
  const possibleMoves = [];

  const completedMoves = match.movesByPlayers[0] | match.movesByPlayers[1];
  console.log('completed moves:', completedMoves.toString(2));

  for (let bit = 0; bit <  9; bit += 1) {
    const move = (completedMoves >> bit) & 0B1;

    if(move !== 0B1) {
      const position = bit + 1;
      possibleMoves.push(position);
    }
  }

  return possibleMoves;
}

export { checkAINextMove };