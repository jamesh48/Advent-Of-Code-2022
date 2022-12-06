import * as path from 'path';
import calorieCounting from './calorieCounting';

describe('Calorie Counting Test Suite', () => {
  describe('Part One Test Cases', () => {
    test('Sample case pt 1 should pass', () => {
      expect(
        calorieCounting(path.join(__dirname, './inputs/sampleInput.txt'), 'pt1')
      ).toEqual(24000);
    });

    test('Pt 1 should pass', () => {
      expect(
        calorieCounting(path.join(__dirname, './inputs/input.txt'), 'pt1')
      ).toEqual(68467);
    });
  });
  describe('Part Two Test Cases', () => {
    test('Sample case pt 2 should pass', () => {
      expect(
        calorieCounting(path.join(__dirname, './inputs/sampleInput.txt'), 'pt2')
      ).toEqual(45000);
    });

    test('Pt 2 should pass', () => {
      expect(
        calorieCounting(path.join(__dirname, './inputs/input.txt'), 'pt2')
      ).toEqual(203420);
    });
  });
});
