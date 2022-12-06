import * as path from 'path';
import rps from './rps';

describe('RPS Test Suite', () => {
  describe('Part One Test Cases', () => {
    test('Sample case pt 1 should pass', () => {
      expect(
        rps(path.resolve(__dirname, './inputs/sampleInput.txt'), 'pt1')
      ).toEqual(15);
    });

    test('Pt 2 should pass', () => {
      expect(rps(path.join(__dirname, './inputs/input.txt'), 'pt1')).toEqual(
        14531
      );
    });
  });

  describe('Part Two Test Cases', () => {
    test('Sample case pt 2 should pass', () => {
      expect(
        rps(path.resolve(__dirname, './inputs/sampleInput.txt'), 'pt2')
      ).toEqual(12);
    });

    test('Pt 2 should pass', () => {
      expect(rps(path.join(__dirname, './inputs/input.txt'), 'pt2')).toEqual(
        11258
      );
    });
  });
});
