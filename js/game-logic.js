let playerOneMoveOneType,
  playerOneMoveTwoType,
  playerOneMoveThreeType,
  playerTwoMoveOneType,
  playerTwoMoveTwoType,
  playerTwoMoveThreeType,
  playerOneMoveOneValue,
  playerOneMoveTwoValue,
  playerOneMoveThreeValue,
  playerTwoMoveOneValue,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeValue;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';

const setPlayerMoves = (player, m1, v1, m2, v2, m3, v3) => {
  // Check that all values are provided
  if (!m1 || !m2 || !m3 || !v1 || !v2 || !v3) {
    return;
  };

  // Checks that values are valid types
  if (!validTypes(m1, m2, m3)) {
    return;
  };

  if (!validValues(v1, v2, v3)) {
    return;
  };

  switch (player) {
    case P1:
    playerOneMoveOneType = m1;
    playerOneMoveTwoType = m2;
    playerOneMoveThreeType = m3;
    playerOneMoveOneValue = v1;
    playerOneMoveTwoValue = v2;
    playerOneMoveThreeValue = v3;
    break;

  case P2:
    playerTwoMoveOneType = m1;
    playerTwoMoveTwoType = m2;
    playerTwoMoveThreeType = m3;
    playerTwoMoveOneValue = v1;
    playerTwoMoveTwoValue = v2;
    playerTwoMoveThreeValue = v3;
    break;
  }
};


const validTypes = (move1, move2, move3) =>
  validType(move1) && validType(move2) && validType(move3);


const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;


const validValues = (value1, value2, value3) =>
  value1 >= 1 && value2 >= 1 && value3 >= 1 && value1 + value2 + value3 < 100;


const getRoundWinner = (round) => {
  switch (round) {
    case 1:
      return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue,
                    playerTwoMoveOneType, playerTwoMoveOneValue);
      break;
    case 2:
      return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue,
                    playerTwoMoveTwoType, playerTwoMoveTwoValue);
      break;
    case 3:
      return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue,
                    playerTwoMoveThreeType, playerTwoMoveThreeValue);
      break
    default:
      return null;
  };
};


const getMoveWinner = (p1moveType, p1moveValue, p2moveType, p2moveValue) => {
  if (!p1moveType || !p1moveValue || !p2moveType || !p2moveValue) {
    return null;
  };

  if (p1moveType === p2moveType) {
    if (p1moveValue > p2moveValue) {
      return P1;
    } else if (p1moveValue < p2moveValue) {
      return P2;
    } else {
      return TIE;
    }
  } else if (p1moveType === ROCK) {
    if (p2moveType === SCISSORS) {
      return P1;
    } else if (p2moveType === PAPER) {
      return P2;
    }
  } else if (p1moveType === PAPER) {
    if (p2moveType === ROCK) {
      return P1;
    } else if (p2moveType === SCISSORS) {
      return P2;
    }
  } else if (p1moveType === SCISSORS) {
    if (p2moveType === ROCK) {
      return P2;
    } else if (p2moveType === PAPER) {
      return P1;
    }
  }
};

const getGameWinner = () => {
  if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || 
      !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
      !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  };

  playerOneWins = 0;
  playerTwoWins = 0;

  const winnerRoundOne = getRoundWinner(1);
  const winnerRoundTwo = getRoundWinner(2);
  const winnerRoundThree = getRoundWinner(3);


  addWin(winnerRoundOne);
  addWin(winnerRoundTwo);
  addWin(winnerRoundThree);

  if (playerOneWins > playerTwoWins) {
    return P1;
  } else if (playerTwoWins > playerOneWins) {
    return P2;
  } else {
    return TIE;
  }
};

const addWin = (winner) => {
  if (winner === P1) {
    playerOneWins = (playerOneWins + 1) || 1;
  } else if (winner === P2) {
    playerTwoWins = (playerTwoWins + 1) || 1;
  }
};