let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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
    case 'Player One':
    playerOneMoveOneType = m1;
    playerOneMoveTwoType = m2;
    playerOneMoveThreeType = m3;
    playerOneMoveOneValue = v1;
    playerOneMoveTwoValue = v2;
    playerOneMoveThreeValue = v3;
    break;

  case 'Player Two':
    playerTwoMoveOneType = m1;
    playerTwoMoveTwoType = m2;
    playerTwoMoveThreeType = m3;
    playerTwoMoveOneValue = v1;
    playerTwoMoveTwoValue = v2;
    playerTwoMoveThreeValue = v3;
    break;
    
  }

};

const getRoundWinner = () => {

};

const validTypes = (move1, move2, move3) =>
  validType(move1) && validType(move2) && validType(move3);

const validType = (type) => type === ROCK || type === PAPER || SCISSORS;

const validValues = (value1, value2, value3) =>
  value1 >= 1 && value2 >= 1 && value3 >= 1 && value1 + value2 + value3 < 100;