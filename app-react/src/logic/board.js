import { Combinations } from '../constants.js';

export const checkWinner = (boardTocheck) => {
    for (const combination of Combinations) {
      const [a, b, c] = combination;
      if (boardTocheck[a] && boardTocheck[a] === boardTocheck[b] && boardTocheck[a] === boardTocheck[c]) {
        return boardTocheck[a];
      }
    }
    return null;
  }