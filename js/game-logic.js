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

const setPlayerMoves = (player, m1, v1, m2, v2, m3, v3) => {
  if (player === 'Player One') {
    if (typeof m1 === 'string' && typeof m2 === 'string' && typeof m3 === 'string') {
      playerOneMoveOneType = m1;
      playerOneMoveTwoType = m2;
      playerOneMoveThreeType = m3;
    } else {};

    if (typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number') {
    playerOneMoveOneValue = v1;
    playerOneMoveTwoValue = v2;
    playerOneMoveThreeValue = v3;
    } else {};

  } else if (player === 'Player Two') {
    if (typeof m1 === 'string' && typeof m2 === 'string' && typeof m3 === 'string') {
      playerTwoMoveOneType = m1;
      playerTwoMoveTwoType = m2;
      playerTwoMoveThreeType = m3;
    } else {};

    if (typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number') {
    playerTwoMoveOneValue = v1;
    playerTwoMoveTwoValue = v2;
    playerTwoMoveThreeValue = v3;
    } else {};
  };
};

const getRoundWinner = () => {

};