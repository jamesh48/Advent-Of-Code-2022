import * as fs from 'fs';
import * as path from 'path';

const readInput = (inputPath: string) => {
  return fs
    .readFileSync(path.resolve(__dirname, inputPath), 'utf-8')
    .split('\n');
};

const parseInputLines = (inputLines: string[]) => {
  return inputLines.map((line) =>
    line
      .split(',')
      .map((entry) => entry.split('-').map((numberStr) => Number(numberStr)))
  );
};

const generateRangeArr = (numArr: number[]) => {
  let rangeArr = [];
  for (let i = numArr[0]; i <= numArr[1]; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
};

const compareArrays = (r1Arr: number[], r2Arr: number[]) => {
  const [smallerArr, biggerArr] = (() => {
    if (r1Arr.length <= r2Arr.length) {
      return [r1Arr, r2Arr];
    }
    return [r2Arr, r1Arr];
  })();

  for (let i = 0; i < smallerArr.length; i++) {
    const biggerArrayContains = biggerArr.indexOf(smallerArr[i]) !== -1;
    if (!biggerArrayContains) {
      return 0;
    }
  }
  return 1;
};

// main
console.info(
  (() => {
    const inputLineArr = readInput('./inputs/input.txt');
    const parsedInputLines = parseInputLines(inputLineArr);
    return parsedInputLines.reduce((total, item) => {
      const rangeOneArr = generateRangeArr(item[0]);
      const rangeTwoArr = generateRangeArr(item[1]);
      return total + compareArrays(rangeOneArr, rangeTwoArr);
    }, 0);
  })()
);
