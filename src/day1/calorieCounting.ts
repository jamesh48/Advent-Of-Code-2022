import { readInputLines } from '@utils';
import { Part } from '@types';

const main = (inputPath: string, part: Part) => {
  const inputLines = readInputLines(inputPath, {
    splitBy: '\n\n',
  }) as string[];
  const parsedResults = inputLines.map((numListStr) => {
    const parsed = numListStr.split('\n');
    const numbers = parsed.map((x) => Number(x));
    return numbers.reduce((total, item) => {
      return total + item;
    }, 0);
  });

  // Answer One
  const answerOne = Math.max(...parsedResults);

  if (part === 'pt1') {
    return answerOne;
  }
  parsedResults.sort((a, b) => b - a);
  const [numOne, numTwo, numThree] = parsedResults;

  const answerTwo = [numOne, numTwo, numThree].reduce(
    (total, item) => total + item,
    0
  );

  if (part === 'pt2') {
    return answerTwo;
  }
  throw new Error('Part must be defined!');
};

export default main;
