import { Layout } from './Layout.js';
import { useStore } from '../../store/store.js';

/**
 * A class representing tile swap puzzles.
 * A puzzle is defined by a base layout, a target layout and the maximum number of moves allowed to solve it.
 */
export class Puzzle {

  static PUZZLES = [
    {
      moves: 20,
      base: [
        [0, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 0]
      ],
      target: [
        [1, 1, 1, 0],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 1, 1, 1]
      ],
      solution: [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4]
    },
    {
      //solution : (all tiles) 1,2,7,11,14,13,8,4
      moves: 12,
      base: [
        [2, 1, 1, 2],
        [0, 2, 2, 0],
        [0, 2, 2, 0],
        [2, 1, 1, 2]
      ],
      target: [
        [2, 0, 0, 2],
        [1, 2, 2, 1],
        [1, 2, 2, 1],
        [2, 0, 0, 2]
      ],
      solution: [1, 2, 7, 11, 14, 13, 8, 4]
    },
    {
      //solution : 0; 5; 10; 15 (All Tiles)
      moves: 4,
      base: [
        [1, 2, 2, 2],
        [2, 0, 2, 2],
        [2, 2, 1, 2],
        [2, 2, 2, 1]
      ],
      target: [
        [1, 2, 2, 2],
        [2, 1, 2, 2],
        [2, 2, 0, 2],
        [2, 2, 2, 1]
      ],
      solution: [0, 5, 10, 15]
    },
    {
      //solution : 3,6,9,10,13,11,8,5
      moves: 10,
      base: [
        [2, 1, 2],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [2, 1, 2]
      ],
      target: [
        [2, 1, 2],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [2, 1, 2]
      ],
      solution: [3, 6, 9, 10, 13, 11, 8, 5]
    },
    {
      // solution : 0, 5, 7, 10
      moves: 6,
      base: [
        [0, 1, 0],
        [0, 2, 0],
        [2, 1, 2],
        [0, 1, 0]
      ],
      target: [
        [1, 1, 1],
        [0, 2, 0],
        [2, 0, 2],
        [0, 1, 0]
      ],
      solution: [0, 5, 7, 10]
    },
    {
      // solution : 0, 3, 7, 9
      moves: 4,
      base: [
        [1, 2, 1],
        [2, 0, 2],
        [1, 2, 1]
      ],
      target: [
        [0, 2, 0],
        [2, 0, 2],
        [0, 2, 0]
      ],
      solution: [0, 3, 7, 9]
    },
    {
      // solution : 1, 11, 14, 23
      moves: 6,
      base: [
        [2, 0, 2, 1, 2],
        [2, 1, 2, 0, 2],
        [1, 1, 1, 1, 1],
        [2, 0, 2, 1, 2],
        [2, 1, 2, 0, 2]
      ],
      target: [
        [2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2],
        [0, 0, 0, 0, 0],
        [2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2]
      ],
      solution: [1, 11, 14, 23]
    },
    {
      // solution 0, 5, 7
      moves: 3,
      base: [
        [0, 1, 2],
        [1, 2, 0],
        [2, 0, 0]
      ],
      target: [
        [1, 1, 2],
        [1, 2, 0],
        [2, 0, 0]
      ],
      solution: [0, 5, 7]
    },
    {
      // solution : 0, 11, 20
      moves: 5,
      base: [
        [0, 2, 1, 2, 1],
        [1, 2, 0, 2, 1],
        [2, 1, 2, 0, 2],
        [0, 2, 1, 2, 0],
        [0, 2, 1, 2, 1]
      ],
      target: [
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [2, 0, 2, 0, 2],
        [0, 2, 0, 2, 0],
        [1, 2, 1, 2, 1]
      ],
      solution: [0, 11, 20]
    },

    {
      // solution : 1, 4, 7
      moves: 5,
      base: [
        [2, 1, 2],
        [0, 1, 0],
        [2, 1, 2]
      ],
      target: [
        [2, 1, 2],
        [1, 0, 1],
        [2, 1, 2]
      ],
      solution: [1, 4, 7]
    },
    {
      // solution : 2, 7, 10, 11, 12, 18
      moves: 8,
      base: [
        [2, 2, 0, 2, 2],
        [2, 1, 0, 1, 2],
        [0, 0, 0, 0, 0],
        [2, 1, 0, 1, 2],
        [2, 2, 0, 2, 2]
      ],
      target: [
        [2, 2, 0, 2, 2],
        [2, 0, 0, 0, 2],
        [0, 0, 0, 1, 1],
        [2, 0, 1, 1, 2],
        [2, 2, 1, 2, 2]
      ],
      solution: [2, 7, 10, 11, 12, 18]
    },
    {
      // solution : 0, 1, 2, 3, 4, 5, 6, 7, 8 (all tiles)
      moves: 9,
      base: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      target: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      solution: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      // solution : 1, 4, 6, 7, 8, 9, 10, 11
      moves: 10,
      base: [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [1, 0, 1]
      ],
      target: [
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1]
      ],
      solution: [1, 4, 6, 7, 8, 9, 10, 11]
    },
    {
      // solution : 1, 2, 4, 6, 7, 8, 9, 10, 11, 16, 19
      moves: 15,
      base: [
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0]
      ],
      target: [
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1]
      ],
      solution: [1, 2, 4, 6, 7, 8, 9, 10, 11, 16, 19]
    },
    {
      moves: 50,
      base: [
        [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
      ],
      target: [
        [2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 1, 1, 1, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        [2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2]
      ],
      solution: [4, 5, 13, 14, 16, 17, 23, 25, 27, 28, 30, 34, 35, 44, 55, 56, 57, 64, 67, 68, 90, 96, 104]
    },
    {
      //solution : 0, 1, 5, 6
      moves: 6,
      base: [
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1]
      ],
      target: [
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 2, 0, 2, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1]
      ],
      solution: [0, 1, 5, 6]
    },
    {
      // solution : 0, 1, 4, 5, 10, 11, 14, 15
      moves: 8,
      base: [
        [1, 1, 1, 2],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [2, 1, 1, 1]
      ],
      target: [
        [1, 1, 1, 2],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [2, 1, 1, 1]
      ],
      solution: [0, 1, 4, 5, 10, 11, 14, 15]
    },
    {
      // solution: 2, 4, 7
      moves: 5,
      base: [
        [0, 0, 0],
        [2, 1, 2],
        [2, 0, 2]
      ],
      target: [
        [1, 0, 0],
        [2, 0, 2],
        [2, 0, 2]
      ],
      solution: [2, 4, 7]
    },
    {
      // solution : 0, 1, 4, 5, 10, 11, 13
      moves: 10,
      base: [
        [1, 1, 1, 2],
        [0, 1, 2, 0],
        [0, 2, 1, 0],
        [2, 0, 0, 0]
      ],
      target: [
        [1, 1, 1, 2],
        [0, 0, 2, 0],
        [1, 2, 1, 0],
        [2, 0, 1, 0]
      ],
      solution: [0, 1, 4, 5, 10, 11, 13]
    },
    {
      // solution : 0, 4
      moves: 2,
      base: [
        [0, 1, 2, 1, 0],
        [2, 1, 0, 1, 2]
      ],
      target: [
        [1, 0, 2, 0, 1],
        [2, 0, 0, 0, 2]
      ],
      solution: [0, 4]
    },
    {
      // solution : 1, 3, 4, 5, 7
      moves: 5,
      base: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      target: [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
      ],
      solution: [1, 3, 4, 5, 7]
    },
    {
      // solution : 6, 7, 9
      moves: 5,
      base: [
        [2, 0, 2],
        [1, 2, 0],
        [1, 1, 0],
        [0, 2, 1],
        [2, 0, 2]
      ],
      target: [
        [2, 0, 2],
        [1, 2, 1],
        [0, 0, 1],
        [1, 2, 0],
        [2, 1, 2]
      ],
      solution: [6, 7, 9]
    },
    {
      // solution : 6, 9, 14, 19
      moves: 6,
      base: [
        [2, 2, 0, 2, 2],
        [1, 1, 0, 0, 0],
        [0, 2, 2, 2, 0],
        [1, 1, 2, 1, 1]
      ],
      target: [
        [2, 2, 1, 2, 2],
        [0, 0, 1, 0, 0],
        [1, 2, 2, 2, 1],
        [1, 1, 2, 1, 1]
      ],
      solution: [6, 9, 14, 19]
    },
    {
      // solution : 2, 7, 9, 12, 16, 19, 23, 26, 28, 33
      moves: 13,
      base: [
        [2, 2, 0, 2, 2, 2],
        [2, 0, 0, 0, 2, 2],
        [0, 0, 0, 2, 1, 2],
        [2, 0, 2, 1, 1, 1],
        [2, 2, 1, 1, 1, 2],
        [2, 2, 2, 1, 2, 2]
      ],
      target: [
        [2, 2, 1, 2, 2, 2],
        [2, 1, 1, 1, 2, 2],
        [1, 1, 1, 2, 0, 2],
        [2, 1, 2, 0, 0, 0],
        [2, 2, 0, 0, 0, 2],
        [2, 2, 2, 0, 2, 2]
      ],
      solution: [2, 7, 9, 12, 16, 19, 23, 26, 28, 33]
    },
    {
      // solution : 3, 12
      moves: 2,
      base: [
        [2, 1, 2, 0, 2],
        [1, 0, 2, 1, 0],
        [2, 2, 1, 2, 2],
        [1, 0, 2, 0, 1],
        [2, 1, 2, 1, 2]
      ],
      target: [
        [2, 1, 2, 1, 2],
        [1, 1, 2, 1, 1],
        [2, 2, 0, 2, 2],
        [1, 1, 2, 1, 1],
        [2, 1, 2, 1, 2]
      ],
      solution: [3, 12]
    },
    {
      // solution : 10, 14, 20, 31, 42, 48
      moves: 6,
      base: [
        [2, 2, 2, 1, 2, 2, 2],
        [2, 2, 1, 1, 1, 2, 2],
        [1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 2],
        [2, 2, 1, 1, 1, 2, 2],
        [2, 1, 1, 2, 1, 1, 2],
        [1, 1, 2, 2, 2, 1, 1]
      ],
      target: [
        [2, 2, 2, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 2, 2],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 2],
        [2, 2, 0, 0, 0, 2, 2],
        [2, 0, 0, 2, 0, 0, 2],
        [0, 0, 2, 2, 2, 0, 0]
      ],
      solution: [10, 14, 20, 31, 42, 48]
    },
    {
      moves: 30,
      base: [
        [2, 0, 0, 0, 2],
        [1, 0, 2, 0, 1],
        [1, 2, 2, 2, 1],
        [1, 0, 2, 0, 1],
        [2, 0, 1, 0, 2]
      ],
      target: [
        [2, 0, 1, 1, 2],
        [1, 0, 2, 1, 0],
        [0, 2, 2, 2, 1],
        [0, 1, 2, 0, 1],
        [2, 1, 0, 0, 2]
      ],
      solution: [3, 16]
    },
    {
      moves: 30,
      base: [
        [1, 0, 2, 2, 0, 0],
        [2, 2, 0, 0, 2, 2],
        [1, 1, 0, 1, 1, 1],
        [2, 0, 2, 2, 1, 2]
      ],
      target: [
        [1, 1, 2, 2, 0, 1],
        [2, 2, 1, 0, 2, 2],
        [1, 1, 0, 1, 0, 1],
        [2, 1, 2, 2, 1, 2]
      ],
      solution: [4, 8, 9, 12, 14, 17, 19, 22]
    },
    {
      moves: 30,
      base: [
        [0, 2, 2, 2, 0],
        [0, 1, 2, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 2, 1, 0],
        [0, 2, 2, 2, 0]
      ],
      target: [
        [1, 2, 2, 2, 1],
        [0, 1, 2, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 2, 1, 0],
        [1, 2, 2, 2, 1]
      ],
      solution: [0, 9, 10, 14, 15, 18, 19, 24]
    },
    {
      moves: 2,
      base: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      target: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ],
      solution: [2, 6]
    },
    {
      moves: 6,
      base: [
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1]
      ],
      target: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      solution: [0, 1, 2, 6, 7, 8]
    },
    {
      // solution : 1,2,4,7,8,11,13,14
      moves: 10,
      base: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      target: [
        [0, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 0]
      ],
      solution: [1, 2, 4, 7, 8, 11, 13, 14]
    },
    {
      // solution : 7,10,14,15,21,24
      moves: 8,
      base: [
        [0, 0, 1, 0, 0],
        [1, 2, 1, 2, 1],
        [0, 2, 1, 2, 1],
        [1, 2, 0, 2, 0],
        [0, 1, 0, 0, 1]
      ],
      target: [
        [0, 1, 0, 1, 0],
        [0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0],
        [0, 2, 1, 2, 0],
        [0, 1, 1, 1, 0]
      ],
      solution: [7, 10, 14, 15, 21, 24]
    },
    {
      // 0, 2, 3, 5
      moves: 6,
      base: [
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 1]
      ],
      target: [
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0]
      ],
      solution: [0, 2, 3, 5]
    },
    {
      // solution : 2, 4, 5, 7, 9, 10, 14
      moves: 10,
      base: [
        [2, 1, 1, 2],
        [1, 1, 2, 1],
        [2, 1, 1, 1],
        [2, 2, 1, 2]
      ],
      target: [
        [2, 0, 0, 2],
        [0, 0, 2, 0],
        [2, 0, 0, 0],
        [2, 2, 0, 2]
      ],
      solution: [2, 4, 5, 7, 9, 10, 14]
    },
    {
      // solution : 1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47
      moves: 25,
      base: [
        [0, 1, 0, 0, 1, 0, 1],
        [1, 2, 2, 1, 2, 2, 1],
        [1, 2, 0, 0, 1, 2, 1],
        [0, 0, 1, 1, 0, 1, 0],
        [0, 2, 1, 1, 1, 2, 1],
        [0, 2, 2, 0, 2, 2, 0],
        [1, 0, 1, 0, 0, 0, 1]
      ],
      target: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 0, 2, 2, 1],
        [1, 2, 0, 0, 0, 2, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 2, 0, 0, 0, 2, 1],
        [1, 2, 2, 0, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],
      solution: [1, 2, 3, 4, 14, 16, 17, 21, 28, 31, 34, 35, 41, 42, 44, 45, 46, 47]
    },
    {
      moves: 30,
      base: [
        [0, 1, 2, 1, 0],
        [1, 1, 0, 1, 1],
        [2, 1, 0, 0, 2],
        [1, 0, 0, 0, 1],
        [0, 0, 2, 0, 0]
      ],
      target: [
        [0, 0, 2, 0, 0],
        [1, 0, 0, 0, 1],
        [2, 0, 0, 1, 2],
        [1, 1, 0, 0, 0],
        [0, 1, 2, 0, 1]
      ],
      solution: [1, 3, 4, 6, 7, 17, 18]
    },
    {
      moves: 8,
      base: [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1]
      ],
      target: [
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0]
      ],
      solution: [6, 9, 21, 24]
    },
    {
      moves: 12,
      base: [
        [2, 2, 2, 2, 2, 0],
        [1, 1, 0, 2, 2, 1],
        [0, 2, 2, 1, 0, 1],
        [1, 2, 0, 2, 2, 2],
        [2, 2, 1, 2, 2, 2],
        [1, 0, 0, 2, 2, 2]
      ],
      target: [
        [2, 2, 2, 2, 2, 1],
        [1, 1, 1, 2, 2, 1],
        [1, 2, 2, 1, 1, 1],
        [1, 2, 0, 2, 2, 2],
        [2, 2, 1, 2, 2, 2],
        [1, 1, 1, 2, 2, 2]
      ],
      solution: [6, 11, 12, 15, 17, 18, 20, 32]
    },
    {
      moves: 30,
      base: [
        [2, 0, 0, 0, 2],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [2, 0, 0, 0, 2]
      ],
      target: [
        [2, 1, 1, 1, 2],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [2, 1, 1, 1, 2]
      ],
      solution: [2, 10, 12, 13, 17]
    },
    {
      moves: 30,
      base: [
        [0, 1, 0, 0, 1],
        [2, 0, 2, 1, 2],
        [2, 1, 2, 0, 2],
        [2, 1, 2, 0, 2],
        [0, 0, 1, 1, 1]
      ],
      target: [
        [1, 1, 1, 0, 0],
        [2, 1, 2, 1, 2],
        [2, 1, 2, 0, 2],
        [2, 1, 2, 1, 2],
        [1, 1, 1, 0, 0]
      ],
      solution: [2, 3, 6, 11, 20, 24]
    },
    {
      moves: 30,
      base: [
        [0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
        [1, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0]
      ],
      target: [
        [0, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0]
      ],
      solution: [2, 3, 5, 10, 11, 16, 18, 23, 24, 25, 26, 27, 28, 31, 34]
    },
    {
      moves: 30,
      base: [
        [2, 2, 0, 2, 2, 2],
        [2, 0, 1, 0, 2, 2],
        [2, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 1, 0],
        [0, 1, 0, 2, 0, 2],
        [2, 0, 2, 2, 2, 2]
      ],
      target: [
        [2, 2, 0, 2, 2, 2],
        [2, 0, 0, 0, 2, 2],
        [2, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 0, 0],
        [0, 0, 0, 2, 0, 2],
        [2, 0, 2, 2, 2, 2]
      ],
      solution: [2, 9, 14, 16, 19, 21, 23, 25, 26]
    },
    {
      moves: 50,
      base: [
        [2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2]
      ],
      target: [
        [2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 1, 1, 0, 1, 2, 2, 2],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 2],
        [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2],
        [2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2]
      ],
      solution: [2, 4, 12, 13, 18, 20, 34, 35, 38, 42, 44, 45, 46, 48, 49, 52, 53, 59, 60, 63, 64, 68, 70]
    },
    {
      moves: 25,
      base: [
        [2, 2, 2, 2, 2, 2, 0, 2, 2],
        [2, 2, 2, 2, 2, 2, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0],
        [2, 2, 2, 2, 2, 2, 0, 0, 0],
        [2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 2, 2, 0, 0, 1, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 1, 2],
        [2, 2, 2, 0, 0, 0, 2, 2, 2]
      ],
      target: [
        [2, 2, 2, 2, 2, 2, 1, 2, 2],
        [2, 2, 2, 2, 2, 2, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 1, 0],
        [2, 2, 2, 2, 2, 2, 1, 0, 0],
        [2, 2, 2, 2, 2, 1, 0, 0, 0],
        [1, 1, 2, 2, 1, 0, 0, 0, 2],
        [2, 1, 1, 1, 0, 0, 0, 0, 2],
        [2, 2, 2, 0, 0, 0, 2, 2, 2]
      ],
      solution: [16, 42, 43, 44, 50, 51, 52, 53, 55, 58, 59, 70]
    },
    {
      moves: 60,
      base: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      target: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      solution: [0, 1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 28, 29, 30, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 46, 47, 48]
    },
    {
      moves: 60,
      base: [
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1]
      ],
      target: [
        [0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
      ],
      solution: [0, 1, 3, 5, 6, 7, 10, 13, 21, 22, 24, 26, 27, 35, 38, 41, 42, 43, 45, 47, 48]
    },
    {
      moves: 50,
      base: [
        [2, 1, 0, 2, 1, 1, 2],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [2, 1, 1, 0, 1, 1, 2],
        [2, 2, 1, 1, 0, 2, 2],
        [2, 2, 2, 1, 2, 2, 2]
      ],
      target: [
        [2, 1, 1, 2, 1, 1, 2],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 2],
        [2, 2, 1, 1, 1, 2, 2],
        [2, 2, 2, 1, 2, 2, 2]
      ],
      solution: [5, 7, 8, 12, 21, 22, 24, 27, 33]
    },
    {
      moves: 50,
      base: [
        [1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2],
        [1, 2, 0, 2, 1],
        [2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1]
      ],
      target: [
        [1, 2, 0, 2, 1],
        [2, 0, 2, 0, 2],
        [0, 2, 1, 2, 0],
        [2, 0, 2, 0, 2],
        [1, 2, 0, 2, 1]
      ],
      solution: [2, 10, 12, 14, 22]
    },
    {
      moves: 150,
      base: [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
      ],
      target: [
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
      ],
      solution: [1, 2, 3, 5, 6, 8, 9, 10, 12, 13, 14, 19, 21, 23, 24, 25, 28, 31, 34, 35, 36, 47, 50, 52, 53, 54, 57, 58, 60, 64, 65, 66, 67, 71, 72, 76, 77, 78, 79, 83, 85, 86, 89, 90, 91, 93, 96, 107, 108, 109, 112, 115, 118, 119, 120, 122, 124, 129, 130, 131, 133, 134, 135, 137, 138, 140, 141, 142]
    },
    {
      moves: 12,
      base: [
        [2, 2, 2, 1, 2, 2, 2],
        [2, 2, 0, 2, 0, 2, 2],
        [2, 0, 2, 1, 2, 0, 2],
        [1, 2, 1, 2, 1, 2, 1],
        [2, 0, 2, 1, 2, 0, 2],
        [2, 2, 0, 2, 0, 2, 2],
        [2, 2, 2, 1, 2, 2, 2],
      ],
      target: [
        [2, 2, 2, 0, 2, 2, 2],
        [2, 2, 0, 2, 0, 2, 2],
        [2, 0, 2, 1, 2, 0, 2],
        [0, 2, 1, 2, 1, 2, 0],
        [2, 0, 2, 1, 2, 0, 2],
        [2, 2, 0, 2, 0, 2, 2],
        [2, 2, 2, 0, 2, 2, 2],
      ],
      solution: [11, 15, 17, 23, 25, 31, 33, 37]
    },
    {
      moves: 36,
      base: [
        [2, 2, 1, 1, 1, 1, 1, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 2, 2, 1, 2, 2, 1, 1],
        [1, 1, 2, 0, 1, 2, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 1]
      ],
      target: [
        [2, 2, 0, 0, 0, 0, 0, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 2, 2, 0, 2, 2, 0, 0],
        [0, 0, 2, 1, 0, 2, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 2, 0, 2, 0, 2, 0, 2, 0]
      ],
      solution: [2, 4, 5, 13, 26, 27, 30, 31, 36, 37, 40, 43, 44, 48, 49, 53, 54, 57, 60, 71]
    }

  ]
    .sort((a, b) => a.solution.length - b.solution.length)
    .map((e, id) => {

      const { base: baseMatrix, target: targetMatrix, moves, solution, modulo } = e;

      baseMatrix.forEach((row, y) => row.forEach((cell, x) => {
        if (cell === 2) {
          baseMatrix[y][x] = -1;
          targetMatrix[y][x] = -1;
        } else if (cell === 1) {
          baseMatrix[y][x] = (modulo ?? 2) - 1;
        }
      }));

      const width = baseMatrix[0].length;
      const height = baseMatrix.length;
      const exclude = Layout.getExcludeFromMatrix(baseMatrix);

      const base = new Layout({
        width, height,
        exclude,
        unlockCategory: 0
      });
      base.setMatrix(baseMatrix);

      const target = new Layout({
        width, height,
        exclude,
        unlockCategory: 0
      })
      target.setMatrix(
        targetMatrix.map(row =>
          row.map(e => e === 1 ? (modulo ?? 2) - 1 : e)
        )
      );

      return new Puzzle({
        base, target, moves, solution, id, modulo: modulo ?? 2
      });
    });

  static get FILTERED_PUZZLES() {
    const store = useStore();
    return this.PUZZLES.filter(e => e.unlockCategory <= store.unlockedCategoriesPZ);
  }

  /**
   * Creates a new puzzle.
   * @param {Layout} base 
   * @param {Layout} target 
   * @param {Number} moves 
   * @param {Number[]} solution
   */
  constructor({ base, target, moves, solution, id, modulo }) {
    this.base = base;
    this.target = target;
    this.moves = moves;
    this.solution = solution;
    this.id = id;
    this.modulo = modulo;
    this.unlockCategory = Math.floor(id / 5) + 1;
  }

  /**
   * Checks if the puzzle is solved.
   * @param {Layout} layout the layout to check
   */
  isSolvedWith(layout) {
    return this.target.matrix
      .every((row, i) =>
        row.every((tile, j) => tile === layout.matrix[i][j])
      );
  }

  targetIsWhite(row, column) {
    if (column === undefined) return this.target.matrix[Math.floor(row / this.target.width)][row % this.target.width] === this.modulo - 1;
    return this.target.matrix[row][column] === this.modulo - 1;
  }

  baseIsWhite(row, column) {
    if (column === undefined) return this.base.matrix[Math.floor(row / this.base.width)][row % this.base.width] === this.modulo - 1;
    return this.base.matrix[row][column] === this.modulo - 1;
  }

  get completionMoves() {
    const store = useStore();
    for (let i = 0; i < store.stats.puzzlesCompleted.length; i++) {
      const data = store.stats.puzzlesCompleted[i];
      if (data.id === this.id) {
        return data.completionMoves;
      }
    }
    return -1;
  }

  set completionMoves(val) {
    const store = useStore();
    for (let i = 0; i < store.stats.puzzlesCompleted.length; i++) {
      const data = store.stats.puzzlesCompleted[i];
      if (data.id === this.id) {
        data.completionMoves = Math.min(val, data.completionMoves);
        return;
      }
    }
    store.stats.puzzlesCompleted.push({ id: this.id, completionMoves: val })
  }
}