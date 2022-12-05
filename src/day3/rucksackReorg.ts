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

// main
console.info(
  (() => {
    const lines = readFileInput('./input.txt');
    const splitValues = lines.map((line) => {
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

    return typeArr.reduce((total, item) => {
      return total + calculateKeyScore(item);
    }, 0);
  })()
);
