import { readInputLines } from '@utils';
import { Part } from '@types';

const calculateKeyScore = (char: string) => {
  if (char.charCodeAt(0) <= 90) {
    return char.charCodeAt(0) - 38;
  }

  if (char.charCodeAt(0) <= 122) {
    return char.charCodeAt(0) - 96;
  }
  throw new Error('unfound charcter code!');
};

const parseSingleLineIntoTwo = (singleLine: string) => {
  const mid = singleLine.length / 2;
  const first = singleLine.slice(0, mid);
  const second = singleLine.slice(mid);
  return [first, second];
};

const calculatePartOneTypes = (inputLines: string[]) => {
  const splitValues = inputLines.map((line) => {
    return parseSingleLineIntoTwo(line);
  });

  let typeArr = [];
  for (let i = 0; i < splitValues.length; i++) {
    for (let j = 0; j < splitValues[i][0].length; j++) {
      if (splitValues[i][1].indexOf(splitValues[i][0][j]) !== -1) {
        typeArr.push(splitValues[i][0][j]);
        break;
      }
    }
  }
  return typeArr;
};

const calculatePartTwoTypes = (threeLineInputArr: string[][]) => {
  let typeArr = [];

  for (let i = 0; i < threeLineInputArr.length; i++) {
    for (let j = 0; j < threeLineInputArr[i][0].length; j++) {
      const charToCheck = threeLineInputArr[i][0][j];
      const secondLineCheck =
        threeLineInputArr[i][1].indexOf(charToCheck) !== -1;
      const thirdLineCheck =
        threeLineInputArr[i][2].indexOf(charToCheck) !== -1;

      if (secondLineCheck && thirdLineCheck) {
        typeArr.push(charToCheck);
        break;
      }
    }
  }
  return typeArr;
};

const determineResult = (typeArr: string[]) =>
  typeArr.reduce((total, item) => total + calculateKeyScore(item), 0);

const main = (inputPath: string, part: Part) => {
  const inputLines = readInputLines(inputPath, { splitBy: '\n' }) as string[];
  const tresLineas = readInputLines(inputPath, {
    splitBy: '\n',
    groupBy: 3,
  }) as string[][];
  const partOneTypes = calculatePartOneTypes(inputLines);
  const partTwoTypes = calculatePartTwoTypes(tresLineas);

  if (part === 'pt1') {
    return determineResult(partOneTypes);
  }

  if (part === 'pt2') {
    return determineResult(partTwoTypes);
  }

  throw new Error('Part must be defined!');
};

export default main;
