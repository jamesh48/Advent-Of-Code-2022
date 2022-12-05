// Hardcode out a map of string to number values.
// Split the input on the new line
// for each array item, split the string into two parts based on the middle item
// loop over one of the parts, check if indexOf !== -1 for each character of the first part vs all the characters of the second part
// when a find is made, break the loop and push the result to an array.
// reduce over that array comparing with the hardcoded map and return the score for each, and adding to the total.

import * as fs from 'fs';
import * as path from 'path';

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

const readFileInput = (inputPath: string) => {
  return fs
    .readFileSync(path.resolve(__dirname, inputPath), 'utf-8')
    .split('\n');
};

const organizeIntoGroupsOfThree = (inputStrs: string[]) => {
  let groupsOfThree = [];
  for (let i = 0; i < inputStrs.length; i += 3) {
    groupsOfThree.push(inputStrs.slice(i, i + 3));
  }

  return groupsOfThree;
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

// main
console.info(
  (() => {
    const inputLines = readFileInput('./inputs/input.txt');
    const tresLineas = organizeIntoGroupsOfThree(inputLines);
    const partOneTypes = calculatePartOneTypes(inputLines);
    const partTwoTypes = calculatePartTwoTypes(tresLineas);

    return [determineResult(partOneTypes), determineResult(partTwoTypes)];
  })()
);
