import * as fs from 'fs';
import * as path from 'path';
(() => {
  const readFileResult = fs.readFileSync(
    path.join(__dirname, './input.txt'),
    'utf-8'
  );
  const arrSplit = readFileResult.split('\n\n');
  const parsedResults = arrSplit.map((numListStr) => {
    const parsed = numListStr.split('\n');
    const numbers = parsed.map((x) => Number(x));
    return numbers.reduce((total, item) => {
      return total + item;
    }, 0);
  });

  // Answer One
  const answerOne = Math.max(...parsedResults);
  console.info(answerOne);

  parsedResults.sort((a, b) => b - a);
  const [numOne, numTwo, numThree] = parsedResults;

  const answerTwo = [numOne, numTwo, numThree].reduce(
    (total, item) => total + item,
    0
  );

  console.info(answerTwo);
})();
