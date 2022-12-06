import { readInputLines } from '@utils';
import { Part } from '@types';

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

const calculateIndividualScore = (
  [opponentMove, myMove]: string[],
  part: 'pt1' | 'pt2'
) => {
  if (part === 'pt1') {
    return partOneWinSelectionMatrix[opponentMove][myMove].score;
  }
  if (part === 'pt2') {
    return partOneWinSelectionMatrix[opponentMove][
      calculateChosenScore(opponentMove, myMove)
    ]['score'];
  }
  throw new Error('Part must be defined!');
};

// Main
const main = (inputPath: string, part: Part) => {
  const inputLines = readInputLines(inputPath, { splitBy: '\n' }) as string[];
  return inputLines
    .map((x) => x.split(' '))
    .reduce((total, item) => {
      return total + calculateIndividualScore(item, part);
    }, 0);
};

export default main;
