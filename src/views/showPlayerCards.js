function showPlayerCards(player1, player2) {
  const playerCard1 = document.querySelector('div.PlayerCard');
  const playerCard1Div = document.querySelector('div.PlayerCard > div');
  const playerCard1Strong = document.querySelector('div.PlayerCard > strong');

  const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');
  const playerCard2Div = document.querySelector('div.PlayerCard + div.PlayerCard > div');
  const playerCard2Strong = document.querySelector('div.PlayerCard + div.PlayerCard > strong');

  const players = [player1, player2];
  const playerCards = [
    {
      card: playerCard1,
      div: playerCard1Div,
      strong: playerCard1Strong,
    },
    {
      card: playerCard2,
      div: playerCard2Div,
      strong: playerCard2Strong,
    }
  ];

  for (let i = 0; i < playerCards.length; i++) {
    const playerAvatarImg = document.createElement('img');
    playerAvatarImg.setAttribute('src', players[i].avatar);

    const playerNameStrong = document.createTextNode(players[i].name);

    playerCards[i].div.appendChild(playerAvatarImg);
    playerCards[i].strong.appendChild(playerNameStrong);
  }
}

export { showPlayerCards };