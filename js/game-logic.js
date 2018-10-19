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

const getRoundWinner = () => {

};