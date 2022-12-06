import { readInputLines } from '@utils';
import { Part } from '@types';

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

const compareArrays = (r1Arr: number[], r2Arr: number[], part: Part) => {
  const [smallerArr, biggerArr] = (() => {
    if (r1Arr.length <= r2Arr.length) {
      return [r1Arr, r2Arr];
    }
    return [r2Arr, r1Arr];
  })();
  for (let i = 0; i < smallerArr.length; i++) {
    if (biggerArr.indexOf(smallerArr[i]) === -1 && part === 'pt1') {
      return 0;
    }

    if (biggerArr.indexOf(smallerArr[i]) !== -1 && part === 'pt2') {
      return 1;
    }
  }

  if (part === 'pt1') {
    return 1;
  }

  if (part === 'pt2') {
    return 0;
  }

  throw new Error('Part must be defined!');
};

const main = (inputPath: string, part: Part) => {
  const inputLineArr = readInputLines(inputPath, { splitBy: '\n' }) as string[];
  const parsedInputLines = parseInputLines(inputLineArr);
  return parsedInputLines.reduce((total, item) => {
    const rangeOneArr = generateRangeArr(item[0]);
    const rangeTwoArr = generateRangeArr(item[1]);
    return total + compareArrays(rangeOneArr, rangeTwoArr, part);
  }, 0);
};

export default main;
