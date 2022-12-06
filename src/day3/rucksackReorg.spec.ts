import * as path from 'path';
import rucksackReorg from './rucksackReorg';

describe('Rucksack Reorganization Test Suite', () => {
  describe('Part One Test Cases', () => {
    test('Sample case pt 1 should pass', () => {
      expect(
        rucksackReorg(
          path.resolve(__dirname, './inputs/sampleInput.txt'),
          'pt1'
        )
      ).toEqual(157);
    });

    test('Pt 2 should pass', () => {
      expect(
        rucksackReorg(path.join(__dirname, './inputs/input.txt'), 'pt1')
      ).toEqual(8088);
    });
  });

  describe('Part Two Test Cases', () => {
    test('Sample case pt 2 should pass', () => {
      expect(
        rucksackReorg(
          path.resolve(__dirname, './inputs/sampleInput.txt'),
          'pt2'
        )
      ).toEqual(70);
    });

    test('Pt 2 should pass', () => {
      expect(
        rucksackReorg(path.join(__dirname, './inputs/input.txt'), 'pt2')
      ).toEqual(2522);
    });
  });
});
