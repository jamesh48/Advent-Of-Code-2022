import * as fs from 'fs';
import * as path from 'path';

const partOneWinSelectionMatrix: {
  [key: string]: { [key: string]: { score: number } };
} = {
  A: { X: { score: 4 }, Y: { score: 8 }, Z: { score: 3 } },
  B: { X: { score: 1 }, Y: { score: 5 }, Z: { score: 9 } },
  C: { X: { score: 7 }, Y: { score: 2 }, Z: { score: 6 } },
};

const partTwoSelectionMatrix: { [key: string]: { [key: string]: string } } = {
  A: { X: 'Z', Y: 'X', Z: 'Y' },
  B: { X: 'X', Y: 'Y', Z: 'Z' },
  C: { X: 'Y', Y: 'Z', Z: 'X' },
};

const calculateChosenScore = (opponentMove: string, mySelection: string) => {
  return partTwoSelectionMatrix[opponentMove][mySelection];
};

const calculateIndividualScore = ([opponentMove, myMove]: string[]) => {
  return partOneWinSelectionMatrix[opponentMove][
    calculateChosenScore(opponentMove, myMove)
  ]['score'];
};
// Part one Solution
console.info(
  (() => {
    const readFileInput = fs.readFileSync(
      path.join(__dirname, './input.txt'),
      'utf-8'
    );

    return readFileInput
      .split('\n')
      .map((x) => x.split(' '))
      .reduce((total, item) => {
        return total + calculateIndividualScore(item);
      }, 0);
  })()
);
