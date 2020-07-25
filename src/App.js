class Player {
  playerId;
  name;
  avatar;

  constructor(){
    this.playerId = Math.floor(Math.random() * (10000 - 15 + 1)) + 15;
    this.name = this.randomName();
    this.avatar = this.randomAvatar();
  }

  randomName() {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const names = {
      1: 'Chewbarka',
      2: 'Ham Solo',
      3: 'Pandaren',
      4: 'Skyhopper',
      5: 'Emperor',
      6: 'JK Growling',
      7: 'Chris P. Bacon',
      8: 'Expandable',
      9: 'Cinnabun',
      10: 'Cameow',

    }

    console.log(randomNumber);

    const name = names[randomNumber];    

    return name;
  }

  randomAvatar() {
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const avatars = {
      1: 'assets/Avatar_Cat-512.png',
      2: 'assets/Avatar_Dog-512.png',
      3: 'assets/Avatar_Panda-512.png',
      4: 'assets/Avatar_Rabbit-512.png',
      5: 'assets/Avatar_Pig-512.png',
    }

    console.log(randomNumber);

    const avatar = avatars[randomNumber];    

    return avatar;
  }
}

class Match {
  matchId;
  player1Id;
  player2Id;
  board;
  turn;

  constructor(player1Id, player2Id) {
    this.matchId = Math.floor(Math.random() * (10000 - 15 + 1)) + 15;
    this.player1Id = player1Id;
    this.player2Id = player2Id;
    this.board = [[0, 0, 0], [0, 0, 0], [0, 0 ,0]];
    this.turn = 0;
  }

  updateBoard(position, playerNum) {
    console.log("player:", playerNum);
    console.log("position:", position);

    switch(position) {
      case '1':
        this.board[0][0] = playerNum;
        console.log(match.board[0][0]);
        break;
      case '2':
        this.board[0][1] = playerNum;
        break;
      case '3':
        this.board[0][2] = playerNum;
        break;
      case '4':
        this.board[1][0] = playerNum;
        break;
      case '5':
        this.board[1][1] = playerNum;
        break;
      case '6':
        this.board[1][2] = playerNum;
        break;
      case '7':
        this.board[2][0] = playerNum;
        break;
      case '8':
        this.board[2][1] = playerNum;
        break;
      case '9':
        match.board[2][2] = playerNum;
        break;
    }
  }

  checkResult() {
    let markedSquares = 0;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(this.board[i][j] !== 0) {
          markedSquares += 1;
        }
      }
    }

    if(markedSquares === 9) {
      return 0;
    }

    console.log(this.board[0][0], this.board[0][1], this.board[0][2])

    if(this.board[0][0] === this.board[0][1]  && this.board[0][0] === this.board[0][2] && this.board[0][0] !== 0) {
      return this.board[0][0];
    }
    else if(this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2] && this.board[1][0] !== 0) {
      return this.board[1][0];
    }
    else if(this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2] && this.board[2][0] !== 0) {
      return this.board[2][0];
    }
    else if(this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0] && this.board[0][0] !== 0) {
      return this.board[0][0];
    }
    else if(this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1] && this.board[0][1] !== 0) {
      return this.board[0][1];
    }
    else if(this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2] && this.board[0][2] !== 0) {
      return this.board[0][2];
    }
    else if(this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== 0) {
      return this.board[0][0];
    }
    else if(this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2] && this.board[2][0] !== 0) {
      return this.board[2][0];
    }

    return -1;
  }
}

class Score {
  player1Score;
  player2Score;

  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
  }
}

let player1;
let player2;
let score;
let match;

function initializePlayers() {

  player1 = new Player();
  player2 = new Player();

  score = new Score();

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

  for(let i = 0; i < playerCards.length; i++){
    const playerAvatarImg = document.createElement('img');
    playerAvatarImg.setAttribute('src', players[i].avatar);

    const playerNameStrong = document.createTextNode(players[i].name);
    
    playerCards[i].div.appendChild(playerAvatarImg);
    playerCards[i].strong.appendChild(playerNameStrong);
  }
}

function initializePlay() {
  const playButton = document.querySelector('section.Play > button');
  playButton.addEventListener('click', removePlay);

}

function removePlay() {
  const mainContainer = document.querySelector('div.MainContainer');
  const playScreen = document.querySelector('section.Play');

  mainContainer.removeChild(playScreen);

  startGame();
}

function startGame() {
  match = new Match(player1.playerId, player2.playerId);
  console.log(match);

  const board = document.querySelector('section.Board');
  const squares = document.querySelectorAll('section.Board > button.none');

  board.setAttribute('class', 'Board');
  
  for(let i = 0; i < squares.length; i++) {
    squares[i].setAttribute('class', 'Square');
    squares[i].setAttribute('id', i + 1);
    squares[i].addEventListener('click', handleSquareClick);
  }

  nextTurn();

  console.log(squares);
}

function nextTurn() {
  const playerCard1 = document.querySelector('div.PlayerCard');
  const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');

  match.turn += 1;

  if(match.turn === 1 || match.turn === 0) {
    playerCard1.setAttribute('class', 'PlayerCard turn');
  }
  else if(match.turn % 2 === 0) {
    playerCard1.setAttribute('class', 'PlayerCard');
    playerCard2.setAttribute('class', 'PlayerCard turn');
  } 
  else {
    playerCard2.setAttribute('class', 'PlayerCard');
    playerCard1.setAttribute('class', 'PlayerCard turn');
  }
}

function handleSquareClick(event) {
  console.log('turn', match.turn);

  if(match.turn % 2 === 0) {
    const x = document.createElement('img');
    x.setAttribute('src', 'assets/x.svg');
    event.target.appendChild(x);
  }
  else {
    const o = document.createElement('img');
    o.setAttribute('src', 'assets/circle.svg');
    event.target.appendChild(o);
  }

  event.target.disabled = true;
  // event.target.setAttribute('type', 'button')
  // event.target.style.pointerEvents = "none";

  const squarePosition = event.target.id;
  const playerNum = match.turn % 2 === 0 ? 2 : 1;
  match.updateBoard(squarePosition, playerNum)

  const result = match.checkResult();
  
  console.log(match.board);
  console.log('result:', result);

  if(result !== -1) {
    removeGame();
    startResult(result);
    return;
  }

  nextTurn();
}


function removeGame() {
  const board = document.querySelector('section.Board');
  const squares = document.querySelectorAll('section.Board > button.Square');
  const playerCard1 = document.querySelector('div.PlayerCard');
  const playerCard2 = document.querySelector('div.PlayerCard + div.PlayerCard');

  board.setAttribute('class', 'Board none');
  playerCard1.setAttribute('class', 'PlayerCard');
  playerCard2.setAttribute('class', 'PlayerCard');
  
  for(let i = 0; i < squares.length; i++) {
    const mark = document.querySelector(`.Square#\\3${i+1} > img`);
    if(mark) {
      squares[i].removeChild(mark);
    }

    squares[i].disabled = false;
    squares[i].setAttribute('class', 'none');
    squares[i].removeEventListener('click', handleSquareClick);
  }
}

function startResult(result) {
  const resultScreen = document.querySelector('div.MainContainer > section:last-of-type');
  console.log(resultScreen);

  if (result === 0) {
    resultScreen.setAttribute('class', 'Draw PlayButton')

    const drawImgContainer = document.querySelector('div.MainContainer > section:last-of-type > div');
    const drawImg1 = document.createElement('img');
    const drawImg2 = document.createElement('img');
    const drawImg3 = document.createElement('img');
    const drawImg4 = document.createElement('img');

    drawImg1.setAttribute('src', 'assets/draw.png');
    drawImg2.setAttribute('src', 'assets/draw2.jpg');
    drawImg3.setAttribute('src', 'assets/draw2.jpg');
    drawImg4.setAttribute('src', 'assets/draw.png');

    drawImgContainer.appendChild(drawImg1);
    drawImgContainer.appendChild(drawImg2);
    drawImgContainer.appendChild(drawImg3);
    drawImgContainer.appendChild(drawImg4);

  }
  else {
    if(result === 1) {
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

  }

  const playButton = document.querySelector('div.MainContainer > section:last-of-type > button');
  const playIconImg = document.querySelector('div.MainContainer > section:last-of-type > button > img');

  playButton.setAttribute('class', '');
  playIconImg.setAttribute('class', '');

  playButton.addEventListener('click', removeResult);
}

function removeResult() {
  const resultScreen = document.querySelector('div.MainContainer > section:last-of-type');
  const container = document.querySelector('div.MainContainer > section:last-of-type > div');
  const images = document.querySelectorAll('div.MainContainer > section:last-of-type > div > img');
  const playButton = document.querySelector('div.MainContainer > section:last-of-type > button');
  const playIconImg = document.querySelector('div.MainContainer > section:last-of-type > button > img');

  for(let i = 0; i < images.length; i++) {
    images[i].setAttribute('class', 'none');
  }

  resultScreen.setAttribute('class', 'none');
  container.setAttribute('class', 'none');
  playButton.setAttribute('class', 'none');
  playIconImg.setAttribute('class', 'none');

  startGame();
}

initializePlayers();
initializePlay();