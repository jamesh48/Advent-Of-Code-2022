import * as path from 'path';
import campCleanup from './campCleanup';

describe('Camp Cleanup Test Suite', () => {
  describe('Part One Test Cases', () => {
    test('Sample case pt 1 should pass', () => {
      expect(
        campCleanup(path.resolve(__dirname, './inputs/sampleInput.txt'), 'pt1')
      ).toEqual(2);
    });

    test('Pt 2 should pass', () => {
      expect(
        campCleanup(path.join(__dirname, './inputs/input.txt'), 'pt1')
      ).toEqual(509);
    });
  });

  describe('Part Two Test Cases', () => {
    test('Sample case pt 2 should pass', () => {
      expect(
        campCleanup(path.resolve(__dirname, './inputs/sampleInput.txt'), 'pt2')
      ).toEqual(4);
    });

    test('Pt 2 should pass', () => {
      expect(
        campCleanup(path.join(__dirname, './inputs/input.txt'), 'pt2')
      ).toEqual(870);
    });
  });
});
