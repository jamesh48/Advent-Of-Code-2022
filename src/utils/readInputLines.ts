import * as fs from 'fs';

export const readInputLines = (
  inputPath: string,
  options?: { groupBy?: number; splitBy?: string }
) => {
  // With no delimiter just return the readFile
  if (!options?.splitBy) {
    return fs.readFileSync(inputPath, 'utf-8');
  }

  const inputLines = fs.readFileSync(inputPath, 'utf-8').split(options.splitBy);

  // With no grouping specified just return the split lines
  if (!options?.groupBy) {
    return inputLines;
  }

  let groupsOfX = [];
  for (let i = 0; i < inputLines.length; i += options.groupBy) {
    groupsOfX.push(inputLines.slice(i, i + options.groupBy));
  }

  // return the split and grouped lines
  return groupsOfX;
};
