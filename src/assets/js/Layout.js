import { ref, computed } from 'vue';
import { useStore } from '../../store/store.js';
import { solve } from './solve/solve.js';

export const tilesToFlip = ref(
  [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [0, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
  ]
);
if (globalThis.window && !window.hasOwnProperty('tilesToFlip')) {
  Object.defineProperty(window, 'tilesToFlip', {
    get: () => tilesToFlip.value,
    set: (value) => {
      tilesToFlip.value = value
    }
  });
}

export const modulo = ref(2);
if (globalThis.window && !window.hasOwnProperty('modulo')) {
  Object.defineProperty(window, 'modulo', {
    get: () => modulo.value,
    set: (value) => {
      if (value < 2) throw new Error('Modulo must be greater than 1');
      modulo.value = value
    }
  });
}

export const setModulo = (value) => {
  if (value < 2) throw new Error('Modulo must be greater than 1');
  modulo.value = value
}

export const gradient = computed(() => {
  return new Array(modulo.value).fill().map((e, i) => {
    return `rgb(${255*(i/(modulo.value-1))},${255*(i/(modulo.value-1))},${255*(i/(modulo.value-1))})`
  });
})

export const outlineGradient = computed(() => {
  return new Array(modulo.value).fill().map((e, i) => {
    return `rgb(${143*(i/(modulo.value-1))+36},${143*(i/(modulo.value-1))+36},${143*(i/(modulo.value-1))+36})`
  });
})

export const highlightGradient = computed(() => {
  return new Array(modulo.value).fill().map((e, i) => {
    return `rgb(${190*(i/(modulo.value-1))+51},${190*(i/(modulo.value-1))+51},${190*(i/(modulo.value-1))+51})`
  });
})

/**
 * A class representing a layout of tiles
 * The tiles are represented by a matrix of 0s, 1s and -1s for excluded tiles
 */
export class Layout {
  static LAYOUTS = [
    //squares
    {
      dimensions: "3x3",
      unlockCategory: 1,
    },
    {
      dimensions: "4x4",
      unlockCategory: 5,
    },
    {
      dimensions: "5x5",
      unlockCategory: 11,
    },
    {
      dimensions: "6x6",

      unlockCategory: 19,
    },
    {
      dimensions: "7x7",

      unlockCategory: 24,
    },
    {
      dimensions: "8x8",

      unlockCategory: 31,
    },
    {
      dimensions: "9x9",

      unlockCategory: 32,
    },
    {
      dimensions: "10x10",

      unlockCategory: 35,
    },
    {
      dimensions: "11x11",

      unlockCategory: 36,
    },
    {
      dimensions: "12x12",

      unlockCategory: 38,
    },
    //rectangles
    {
      dimensions: "3x4",

      unlockCategory: 8,
    },
    {
      dimensions: "3x5",

      unlockCategory: 3,
    },
    {
      dimensions: "3x6",

      unlockCategory: 20,
    },
    {
      dimensions: "3x7",

      unlockCategory: 20,
    },
    //diamond
    {
      dimensions: "3x3",
      exclude: [0, 2, 6, 8],
      unlockCategory: 2,
    },
    {
      dimensions: "5x5",
      exclude: [0, 1, 3, 4, 5, 9, 15, 19, 20, 21, 23, 24],
      unlockCategory: 12,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 2, 4, 5, 6, 7, 8, 12, 13, 14, 20, 28, 34, 35, 36, 40, 41, 42,
        43, 44, 46, 47, 48,
      ],
      unlockCategory: 27,
    },
    //circle
    {
      dimensions: "6x6",
      exclude: [0, 1, 4, 5, 6, 11, 24, 29, 30, 31, 34, 35],
      unlockCategory: 22,
    },
    {
      dimensions: "7x7",
      exclude: [0, 1, 5, 6, 7, 13, 35, 41, 42, 43, 47, 48],
      unlockCategory: 29,
    },
    {
      dimensions: "8x8",
      exclude: [0, 1, 6, 7, 8, 15, 48, 55, 56, 57, 62, 63],
      unlockCategory: 34,
    },
    {
      dimensions: "3x3",
      exclude: [3, 5, 6, 8],
      unlockCategory: 2,
    },
    {
      dimensions: "3x3",
      exclude: [4],
      unlockCategory: 2,
    },
    {
      dimensions: "3x3",
      exclude: [1, 3, 5, 7],
      unlockCategory: 2,
    },
    {
      dimensions: "3x3",
      exclude: [4, 7],
      unlockCategory: 2,
    },
    {
      dimensions: "4x4",
      exclude: [5, 10],
      unlockCategory: 9,
    },
    {
      dimensions: "4x4",
      exclude: [3, 12],
      unlockCategory: 9,
    },
    {
      dimensions: "4x4",
      exclude: [3, 6, 9, 12],
      unlockCategory: 8,
    },
    {
      dimensions: "4x4",
      exclude: [0, 3, 12, 15],
      unlockCategory: 9,
    },
    {
      dimensions: "4x4",
      exclude: [2, 3, 7, 8, 12, 13],
      unlockCategory: 7,
    },
    {
      dimensions: "4x4",
      exclude: [0, 3, 6, 8, 12, 13, 15],
      unlockCategory: 7,
    },
    {
      dimensions: "4x4",
      exclude: [0, 3, 5, 6, 9, 10, 12, 15],
      unlockCategory: 6,
    },
    {
      dimensions: "4x4",
      exclude: [0, 1, 4, 5, 10, 11, 14, 15],
      unlockCategory: 6,
    },
    {
      dimensions: "4x4",
      exclude: [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14],
      unlockCategory: 6,
    },
    {
      dimensions: "3x5",
      exclude: [0, 2, 12, 14],
      unlockCategory: 8,
    },
    {
      dimensions: "5x2",
      exclude: [2, 5, 9],
      unlockCategory: 6,
    },
    {
      dimensions: "3x4",
      exclude: [4, 6, 8],
      unlockCategory: 7,
    },
    {
      dimensions: "5x5",
      exclude: [0, 2, 4, 10, 14, 20, 22, 24],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [0, 2, 4, 10, 12, 14, 20, 22, 24],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [6, 8, 16, 18],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [6, 8, 11, 13, 16, 18],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [5, 7, 9, 10, 12, 14, 15, 17, 19],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [0, 2, 4, 7, 10, 11, 13, 14, 17, 20, 22, 24],
      unlockCategory: 12,
    },
    {
      dimensions: "5x5",
      exclude: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
      unlockCategory: 12,
    },
    {
      dimensions: "5x5",
      exclude: [0, 4, 5, 6, 8, 9, 15, 16, 18, 19, 20, 24],
      unlockCategory: 12,
    },
    {
      dimensions: "5x5",
      exclude: [2, 4, 6, 8, 10, 12, 16, 19, 20, 23, 24],
      unlockCategory: 17,
    },
    {
      dimensions: "5x5",
      exclude: [0, 1, 5, 6, 7, 9, 10, 14, 15, 17, 18, 19, 23, 24],
      unlockCategory: 8,
    },
    {
      dimensions: "3x3",
      exclude: [2, 4, 6],
      unlockCategory: 2,
    },
    {
      dimensions: "5x5",
      exclude: [0, 4, 20, 24],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [0, 4, 20, 24, 7, 11, 12, 13, 17],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [2, 10, 14, 22],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [12],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [0, 1, 3, 4, 5, 7, 9, 11, 13, 15, 17, 19, 20, 21, 23, 24],
      unlockCategory: 10,
    },
    {
      dimensions: "4x7",
      exclude: [1, 2, 3, 6, 7, 9, 11, 13, 14, 17, 19, 22, 23, 25, 26, 27],
      unlockCategory: 17,
    },
    {
      dimensions: "5x5",
      exclude: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
      unlockCategory: 10,
    },
    {
      dimensions: "5x5",
      exclude: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      unlockCategory: 10,
    },
    {
      dimensions: "5x5",
      exclude: [7, 12, 17],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [7, 11, 13, 17],
      unlockCategory: 13,
    },
    {
      dimensions: "5x5",
      exclude: [1, 3, 5, 9, 11, 13, 15, 19, 21, 23],
      unlockCategory: 14,
    },
    {
      dimensions: "5x5",
      exclude: [1, 2, 3, 7, 17, 21, 22, 23],
      unlockCategory: 12,
    },
    {
      dimensions: "5x5",
      exclude: [0, 1, 3, 4, 5, 6, 8, 9, 15, 16, 18, 19, 20, 21, 23, 24],
      unlockCategory: 7,
    },
    {
      dimensions: "4x7",
      exclude: [0, 1, 2, 4, 5, 8, 16, 20, 21, 24, 25, 26],
      unlockCategory: 18,
    },
    {
      dimensions: "5x5",
      exclude: [5, 6, 7, 8, 13, 16, 17, 18],
      unlockCategory: 18,
    },
    {
      dimensions: "3x5",
      exclude: [0, 2, 4, 10, 12, 14],
      unlockCategory: 7,
    },
    {
      dimensions: "7x7",
      exclude: [8, 9, 11, 12, 15, 19, 29, 33, 36, 37, 39, 40],
      unlockCategory: 29,
    },
    {
      dimensions: "5x4",
      exclude: [0, 1, 3, 4, 11, 12, 13, 17],
      unlockCategory: 15,
    },
    {
      dimensions: "6x6",
      exclude: [
        0, 1, 3, 4, 5, 6, 10, 11, 12, 13, 15, 17, 18, 20, 27, 29, 30, 32,
        33, 34, 35,
      ],
      unlockCategory: 17,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 2, 3, 4, 5, 12, 15, 16, 17, 19, 22, 26, 29, 31, 32, 33, 36,
        43, 44, 45, 46, 47, 48,
      ],
      unlockCategory: 27,
    },
    {
      dimensions: "5x5",
      exclude: [1, 3, 6, 8, 10, 12, 14, 16, 18, 21, 23],
      unlockCategory: 10,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 2, 3, 6, 7, 8, 9, 13, 14, 15, 21, 34, 40, 41, 42, 43, 46, 47,
        48,
      ],
      unlockCategory: 28,
    },
    {
      dimensions: "6x6",
      exclude: [
        0, 1, 2, 3, 4, 9, 10, 13, 14, 19, 21, 22, 23, 24, 25, 27, 28, 29,
        33, 34, 35,
      ],
      unlockCategory: 16,
    },
    {
      dimensions: "5x4",
      exclude: [6, 7, 8, 10, 14],
      unlockCategory: 18,
    },
    {
      dimensions: "6x6",
      exclude: [
        0, 1, 3, 4, 5, 6, 10, 11, 15, 17, 18, 20, 24, 25, 29, 30, 31, 32,
        34, 35,
      ],
      unlockCategory: 18,
    },
    {
      dimensions: "5x7",
      exclude: [0, 1, 3, 4, 5, 9, 15, 16, 18, 19, 25, 29, 30, 31, 33, 34],
      unlockCategory: 22,
    },
    {
      dimensions: "3x8",
      exclude: [4, 6, 8, 10, 13, 15, 17, 19],
      unlockCategory: 18,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 5, 6, 7, 8, 10, 12, 13, 17, 22, 23, 24, 25, 26, 31, 35, 36,
        38, 40, 41, 42, 43, 47, 48,
      ],
      unlockCategory: 22,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 5, 6, 7, 8, 10, 12, 13, 22, 24, 26, 35, 36, 38, 40, 41, 42,
        43, 47, 48,
      ],
      unlockCategory: 28,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 2, 4, 5, 6, 7, 8, 12, 13, 21, 27, 28, 29, 33, 34, 35, 38, 41,
        44, 45, 46,
      ],
      unlockCategory: 25,
    },
    {
      dimensions: "7x7",
      exclude: [
        2, 4, 10, 14, 16, 17, 18, 20, 22, 23, 24, 25, 26, 28, 30, 31, 32,
        34, 38, 44, 46,
      ],
      unlockCategory: 28,
    },
    {
      dimensions: "5x6",
      exclude: [2, 6, 8, 11, 12, 13, 16, 17, 18, 21, 23, 27],
      unlockCategory: 21,
    },
    {
      dimensions: "7x9",
      exclude: [
        0, 1, 5, 6, 7, 8, 10, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 25,
        26, 27, 29, 33, 34, 35, 37, 39, 41, 42, 43, 44, 46, 47, 49, 50, 52,
        54, 55, 56, 57, 59, 61, 62,
      ],
      unlockCategory: 23,
    },
    {
      dimensions: "9x9",
      exclude: [
        0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21,
        22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41,
        45, 46, 47, 48, 49, 56, 57, 62, 63, 71, 72, 73, 74, 78, 79, 80,
      ],
      unlockCategory: 25,
    },
    {
      dimensions: "11x8",
      exclude: [
        0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 19, 20, 21, 22,
        23, 31, 32, 33, 36, 40, 43, 56, 64, 67, 69, 70, 71, 72, 73, 75, 77,
        78, 79, 82, 85, 86, 87,
      ],
      unlockCategory: 30,
    },
    {
      dimensions: "9x9",
      exclude: [
        0, 1, 2, 9, 10, 11, 18, 19, 20, 6, 7, 8, 15, 16, 17, 24, 25, 26, 54,
        55, 56, 63, 64, 65, 72, 73, 74, 60, 61, 62, 69, 70, 71, 78, 79, 80,
        3, 5, 21, 23, 27, 29, 45, 47, 33, 35, 51, 53, 57, 59, 75, 77,
      ],
      unlockCategory: 29,
    },
    {
      dimensions: "4x6",
      exclude: [0, 1, 4, 6, 8, 10, 13, 14, 15, 18, 19, 22, 23],
      unlockCategory: 8,
    },
    {
      dimensions: "6x4",
      exclude: [2, 3, 6, 7, 10, 11, 18, 20, 21, 23],
      unlockCategory: 17,
    },
    {
      dimensions: "5x5",
      exclude: [0, 1, 3, 4, 5, 7, 11, 12, 13, 15, 17, 20, 21, 23, 24],
      unlockCategory: 7,
    },
    {
      dimensions: "5x3",
      exclude: [0, 1, 2, 5, 8, 11, 13],
      unlockCategory: 6,
    },
    {
      dimensions: "7x3",
      exclude: [1, 5, 15, 19],
      unlockCategory: 18,
    },
    {
      dimensions: "9x6",
      exclude: [
        0, 1, 2, 4, 6, 7, 8, 10, 16, 21, 23, 27, 35, 36, 38, 40, 42, 44, 47,
        48, 49, 50, 51,
      ],
      unlockCategory: 26,
    },
    {
      dimensions: "9x8",
      exclude: [0, 1, 7, 8, 9, 17, 20, 21, 23, 24, 29, 32, 64, 66, 68, 70],
      unlockCategory: 30,
    },
    {
      dimensions: "8x8",
      exclude: [
        0, 1, 2, 5, 6, 7, 8, 9, 14, 15, 16, 23, 26, 29, 40, 41, 43, 44, 46,
        47, 48, 50, 53, 55, 57, 59, 60, 62,
      ],
      unlockCategory: 26,
    },
    {
      dimensions: "11x7",
      exclude: [
        0, 1, 7, 8, 9, 10, 11, 21, 22, 30, 31, 32, 43, 55, 65, 66, 67, 74,
        75, 76,
      ],
      unlockCategory: 33,
    },
    {
      dimensions: "11x10",
      exclude: [
        0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22,
        23, 31, 32, 33, 43, 88, 98, 99, 100, 108, 109,
      ],
      unlockCategory: 33,
    },
    {
      dimensions: "8x6",
      exclude: [
        0, 1, 2, 3, 4, 6, 7, 12, 15, 17, 18, 19, 22, 24, 25, 28, 29, 30, 32,
        33, 36, 38, 39, 40, 41, 42, 43, 45, 46, 47,
      ],
      unlockCategory: 21,
    },
    {
      dimensions: "4x7",
      exclude: [0, 3, 5, 7, 8, 10, 11, 12, 15, 16, 19, 20, 21, 22, 24, 27],
      unlockCategory: 16,
    },
    {
      dimensions: "7x5",
      exclude: [
        2, 3, 4, 7, 9, 11, 13, 14, 17, 20, 21, 23, 25, 27, 30, 31, 32,
      ],
      unlockCategory: 21,
    },
    {
      dimensions: "6x6",
      exclude: [
        0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 28, 29,
        30, 31, 32, 34, 35,
      ],
      unlockCategory: 16,
    },
    {
      dimensions: "6x6",
      exclude: [
        3, 4, 5, 7, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26,
        28, 30, 31, 32, 33,
      ],
      unlockCategory: 17,
    },
    {
      dimensions: "7x5",
      exclude: [0, 1, 5, 6, 7, 10, 13, 14, 17, 20, 21, 27, 30, 31, 32],
      unlockCategory: 22,
    },
    {
      dimensions: "6x6",
      exclude: [
        0, 4, 5, 7, 9, 11, 14, 19, 21, 22, 24, 27, 28, 29, 30, 31, 34, 35,
      ],
      unlockCategory: 21,
    },
    {
      dimensions: "5x4",
      exclude: [1, 2, 3, 6, 8],
      unlockCategory: 14,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 16, 18, 19, 20, 21, 22, 24, 27,
        28, 29, 30, 32, 33, 35, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48,
      ],
      unlockCategory: 16,
    },
    {
      dimensions: "5x6",
      exclude: [0, 1, 4, 5, 7, 8, 10, 12, 17, 19, 21, 22, 24, 25, 28, 29],
      unlockCategory: 17,
    },
    {
      dimensions: "10x5",
      exclude: [
        0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22,
        24, 26, 27, 28, 29, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46,
        47, 48, 49,
      ],
      unlockCategory: 16,
    },
    {
      dimensions: "10x6",
      exclude: [
        0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16, 17, 18, 19, 22, 25, 26,
        29, 30, 31, 32, 35, 40, 41, 42, 43, 50, 51, 52, 53, 54, 57, 58, 59,
      ],
      unlockCategory: 22,
    },
    {
      dimensions: "7x7",
      exclude: [
        2, 3, 4, 10, 14, 20, 21, 22, 26, 27, 28, 34, 38, 44, 45, 46,
      ],
      unlockCategory: 29,
    },
    {
      dimensions: "6x3",
      exclude: [0, 5, 12, 17],
      unlockCategory: 15,
    },
    {
      dimensions: "7x7",
      exclude: [1, 5, 15, 19],
      unlockCategory: 34,
    },
    {
      dimensions: "5x7",
      exclude: [6, 8, 11, 13, 21, 22, 23, 27],
      unlockCategory: 28,
    },
    {
      dimensions: "3x5",
      exclude: [2, 4, 8, 10, 14],
      unlockCategory: 3,
    },
    {
      dimensions: "3x5",
      exclude: [0, 4, 5, 7, 8, 10, 11, 12],
      unlockCategory: 3,
    },
    {
      dimensions: "3x5",
      exclude: [2, 4, 7, 10, 14],
      unlockCategory: 3,
    },
    {
      dimensions: "5x5",
      exclude: [0, 4, 15, 19, 20, 21, 23, 24],
      unlockCategory: 23,
    },
    {
      dimensions: "7x8",
      exclude: [
        0, 1, 2, 4, 5, 6, 7, 8, 12, 13, 14, 20, 28, 34, 35, 38, 41, 42, 45,
        48, 49, 52, 55,
      ],
      unlockCategory: 25,
    },
    {
      dimensions: "6x5",
      exclude: [0, 1, 3, 4, 6, 9],
      unlockCategory: 27,
    },
    {
      dimensions: "7x7",
      exclude: [0, 3, 6, 28, 34, 35, 36, 40, 41, 42, 43, 44, 46, 47, 48],
      unlockCategory: 25,
    },
    {
      dimensions: "8x4",
      exclude: [0, 1, 6, 7, 8, 9, 14, 15, 16, 17, 22, 23],
      unlockCategory: 23,
    },
    {
      dimensions: "7x5",
      exclude: [
        1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 21, 22, 23, 25, 27, 28, 29,
        30, 32, 34,
      ],
      unlockCategory: 17,
    },
    {
      dimensions: "5x8",
      exclude: [
        0, 4, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25,
        26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39,
      ],
      unlockCategory: 15,
    },
    {
      dimensions: "3x5",
      exclude: [0, 2, 4, 10, 13],
      unlockCategory: 3,
    },
    {
      dimensions: "7x9",
      exclude: [
        0, 1, 5, 6, 7, 13, 28, 29, 30, 32, 33, 34, 35, 36, 37, 39, 40, 41,
        42, 43, 44, 46, 47, 48, 49, 50, 51, 53, 55, 56, 57, 58, 59, 61, 62,
      ],
      unlockCategory: 25,
    },
    {
      dimensions: "7x5",
      exclude: [
        0, 1, 3, 4, 5, 10, 11, 12, 15, 17, 18, 19, 24, 25, 26, 28, 29,
      ],
      unlockCategory: 23,
    },
    {
      dimensions: "8x3",
      exclude: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 22, 23],
      unlockCategory: 6,
    },
    {
      dimensions: "3x4",
      exclude: [0, 2, 4, 7, 9, 11],
      unlockCategory: 6,
    },
    {
      dimensions: "3x4",
      exclude: [4, 7],
      unlockCategory: 4,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 2, 4, 5, 6, 7, 8, 10, 12, 13, 14, 16, 18, 20, 22, 24, 26, 28,
        30, 32, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 47, 48,
      ],
      unlockCategory: 18,
    },
    {
      dimensions: "9x9",
      exclude: [
        0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 21, 23,
        25, 26, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 54,
        55, 57, 59, 61, 62, 63, 64, 65, 67, 69, 70, 71, 72, 73, 74, 75, 77,
        78, 79, 80,
      ],
      unlockCategory: 27,
    },
    {
      dimensions: "7x7",
      exclude: [0, 1, 5, 6, 7, 13, 15, 18, 35, 38, 41, 42, 43, 47, 48],
      unlockCategory: 29,
    },
    {
      dimensions: "3x5",
      exclude: [0, 2, 4],
      unlockCategory: 15,
    },
    {
      dimensions: "4x7",
      exclude: [5, 6, 8, 9, 10, 12, 13, 15, 16, 18, 19],
      unlockCategory: 23,
    },
    {
      dimensions: "3x5",
      exclude: [1, 2, 4, 5, 7, 8, 10, 11],
      unlockCategory: 4,
    },
    {
      dimensions: "3x5",
      exclude: [3, 5, 6, 8, 9, 11],
      unlockCategory: 4,
    },
    {
      dimensions: "5x5",
      exclude: [1, 2, 3, 7, 11, 13, 16, 17, 18, 21, 22, 23],
      unlockCategory: 15,
    },
    {
      dimensions: "5x5",
      exclude: [1, 2, 3, 7, 8, 13, 16, 21, 22],
      unlockCategory: 15,
    },
    {
      dimensions: "7x7",
      exclude: [
        0, 1, 3, 5, 6, 7, 10, 13, 17, 21, 22, 23, 25, 26, 27, 31, 35, 38,
        41, 42, 43, 45, 47, 48,
      ],
      unlockCategory: 27,
    },
    {
      dimensions: "9x9",
      exclude: [
        0, 1, 2, 4, 6, 7, 8, 9, 10, 13, 16, 17, 18, 22, 26, 31, 36, 37, 38,
        39, 41, 42, 43, 44, 49, 54, 58, 62, 63, 64, 67, 70, 71, 72, 73, 74,
        76, 78, 79, 80,
      ],
      unlockCategory: 34,
    },
    {
      dimensions: "11x11",
      exclude: [
        0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 20, 21, 22, 32, 32, 33, 43, 77, 87,
        88, 98, 99, 100, 108, 109, 110, 111, 112, 113, 117, 118, 119, 120,
      ],
      unlockCategory: 33,
    },
    {
      dimensions: "11x11",
      exclude: [
        0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 20, 21, 22, 32, 32, 33, 43, 51, 52,
        53, 54, 59, 60, 61, 62, 63, 64, 65, 73, 74, 75, 76, 77, 87, 88, 98,
        99, 100, 108, 109, 110, 111, 112, 113, 117, 118, 119, 120,
      ],
      unlockCategory: 33,
    },
    {
      dimensions: "5x5",
      exclude: [2, 11, 12, 13, 17],
      unlockCategory: 13,
    },
    {
      dimensions: "9x5",
      exclude: [
        0, 3, 4, 5, 8, 10, 12, 13, 14, 16, 19, 20, 21, 23, 24, 25, 27, 31,
        35, 36, 37, 38, 40, 42, 43, 44,
      ],
      unlockCategory: 22,
    },
    {
      dimensions: "8x6",
      exclude: [
        0, 18, 20, 21, 22, 23, 27, 28, 29, 30, 31, 34, 35, 36, 37, 38, 39,
        42, 43, 44, 45, 46, 47,
      ],
      unlockCategory: 25,
    },
    {
      dimensions: "11x11",
      exclude: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 18, 22, 23, 30, 32, 33,
        42, 43, 54, 65, 76, 87, 88, 97, 98, 100, 107, 108, 109, 110, 112,
        117, 118, 119, 120,
      ],
      unlockCategory: 33,
    },
    {
      dimensions: "3x5",
      exclude: [4, 5, 8, 10, 11],
      unlockCategory: 3,
    },
    {
      dimensions: "3x5",
      exclude: [4, 5, 8, 10, 11, 13, 14],
      unlockCategory: 4,
    },
    {
      dimensions: "3x5",
      exclude: [0, 4, 5, 7, 8, 10, 12],
      unlockCategory: 4,
    },
    {
      dimensions: "3x5",
      exclude: [1, 4, 10, 13],
      unlockCategory: 4,
    },
    {
      dimensions: "3x5",
      exclude: [1, 4, 8, 10, 13],
      unlockCategory: 4,
    },
    {
      dimensions: "11x8",
      exclude: [
        0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 17, 19, 20, 21, 23, 24, 25,
        26, 27, 29, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 43, 45, 46, 47,
        48, 49, 50, 51, 52, 54, 55, 58, 59, 61, 62, 64, 65, 66, 67, 68, 71,
        74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
      ],
      unlockCategory: 23,
    },
    {
      dimensions: "9x9",
      exclude: [
        0, 1, 3, 5, 7, 8, 9, 10, 16, 17, 20, 24, 27, 30, 32, 35, 40, 45, 48,
        50, 53, 56, 60, 63, 64, 70, 71, 72, 73, 75, 77, 79, 80,
      ],
      unlockCategory: 34,
    },
    {
      dimensions: "9x8",
      exclude: [
        0, 1, 2, 6, 7, 8, 9, 17, 29, 30, 32, 33, 45, 46, 49, 52, 53, 54, 56,
        57, 59, 60, 62, 63, 64, 66, 67, 68, 70, 71,
      ],
      unlockCategory: 30,
    },
    {
      dimensions: "9x7",
      exclude: [
        0, 1, 3, 4, 5, 7, 8, 9, 17, 20, 21, 23, 24, 46, 48, 50, 52, 54, 56,
        58, 60, 62,
      ],
      unlockCategory: 26,
    },
    {
      dimensions: "12x10",
      exclude: [
        0, 2, 5, 8, 9, 11, 12, 13, 15, 19, 23, 24, 25, 28, 32, 34, 36, 38,
        42, 46, 53, 54, 59, 60, 63, 67, 69, 70, 72, 76, 78, 80, 81, 83, 84,
        87, 91, 92, 95, 97, 101, 105, 107, 109, 110, 113, 114, 116, 118,
        // 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 131,
      ],
      unlockCategory: 37,
    },
    {
      dimensions: "10x10",
      exclude: [
        0, 1, 2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 17, 20, 21, 22, 23, 24,
        25, 27, 28, 29, 37, 41, 42, 44, 45, 46, 48, 50, 52, 53, 54, 57, 58,
        59, 60, 61, 65, 66, 69, 71, 73, 74, 77, 78, 82, 83, 84, 86, 87, 89,
        90, 91, 92, 93, 94, 95, 98, 99,
      ],
      unlockCategory: 34,
    },
    {
      dimensions: "11x11",
      exclude: [
        0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 20, 21,
        22, 23, 24, 25, 27, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 41, 42,
        43, 44, 48, 49, 50, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 70,
        71, 72, 76, 77, 78, 79, 80, 82, 84, 85, 86, 87, 88, 89, 90, 91, 93,
        95, 96, 97, 98, 99, 100, 101, 102, 104, 106, 107, 108, 109, 110,
        111, 112, 113, 114, 116, 117, 118, 119, 120,
      ],
      unlockCategory: 28,
    },
    {
      dimensions: "13x13",
      unlockCategory: 39,
    },
    {
      dimensions: "6x6",
      exclude: [0, 1, 9, 10, 11, 15, 16, 17, 24, 25, 30, 31, 33, 34],
      unlockCategory: 17
    },
  ].map((e,id) => {
    const width = parseInt(e.dimensions.split("x")[0]);
    const height = parseInt(e.dimensions.split("x")[1]);
    const { unlockCategory } = e;

    return new Layout({
      width, height, 
      unlockCategory,
      id,
      exclude: e.exclude ?? [],
    });
  }).sort((a, b) => a.unlockCategory - b.unlockCategory);

  static get FILTERED_LAYOUTS() {
    const store = useStore();
    return this.LAYOUTS.filter(e => e.unlockCategory <= store.unlockedCategoriesFP)
  }

  /**
   * Creates a new Layout object
   * @param {Number} width the width of the layout
   * @param {Number} height the height of the layout 
   * @param {Number[]} exclude the indices of the tiles to exclude from the layout
   * @param {Number} unlockCategory the level at which this layout is unlocked
   */
  constructor ({ width, height, exclude, unlockCategory, id }) {
    this.width = width;
    this.height = height;
    this.exclude = exclude ?? [];
    this.unlockCategory = unlockCategory ?? 0;
    this.matrix = new Array(height).fill(0).map(() => new Array(width).fill().map(e => modulo.value - 1));
    this.id = id;
    for (const e of this.exclude) {
      this.matrix[Math.floor(e / width)][e % width] = -1;
    }
  }

  /**
   * Swaps the tile at the specified position with its neighbors
   * @param {Number} row the row of the tile to swap
   * @param {Number} column the column of the tile to swap
   * @returns {Number} the number of tiles swapped
   */
  swapTiles(row, column, direction = 1) {
    let count = 0;
    
    for (const delta of tilesToFlip.value) {
      const x = column + delta[0];
      const y = row + delta[1];
      if (x >= 0 && x < this.matrix[0].length
        && y >= 0 && y < this.matrix.length
        && this.matrix[y][x] !== -1) {
          this.matrix[y][x] = Layout.modulo(this.matrix[y][x] + direction);
          count++;
        }
    }
    
    return count;
  }

  /**
   * Sets all tiles in the matrix to the specified value
   * @param {Number} value the value to set the tiles to
   */
  setAllTiles(value) {
    for (let i = 0; i < this.matrix.length; i++)
      for (let j = 0; j < this.matrix[0].length; j++)
        if (this.matrix[i][j] !== -1)
          this.matrix[i][j] = value;
  }

  /**
   * Sets the matrix to the specified matrix
   * @param {Number[][]} matrix the matrix to set the layout to
   */
  setMatrix(matrix) {
    this.matrix = matrix.map(row => row.slice());
    this.exclude = Layout.getExcludeFromMatrix(this.matrix);
  }

  /**
   * Checks if the matrix is solved
   */
  isSolved() {
    return this.matrix.every(row => row.every(tile => tile === modulo.value - 1 || tile === -1));
  }

  /**
   * Checks if the tile at the specified position is a tile
   * @param {Number} row the row of the tile
   * @param {Number} column the column of the tile 
   * @returns {Boolean} true if the tile is a tile, false otherwise
   */
  isTile(row, column) {
    if (column === undefined) return this.matrix[Math.floor(row / this.width)][row % this.width] !== -1;
    return this.matrix[row][column] !== -1;
  }
  /**
   * Checks if the tile at the specified position is white
   * @param {Number} row the row of the tile 
   * @param {Number} column the column of the tile
   * @returns {Boolean} true if the tile is white, false otherwise
   */
  isWhite(row, column) {
    if (column === undefined) return this.matrix[Math.floor(row / this.width)][row % this.width] === modulo.value-1;
    return this.matrix[row][column] === modulo.value - 1;
  }

  nTiles() {
    return this.width * this.height - this.exclude.length;
  }

  /**
   * Creates a copy of the layout
   * @returns {Layout} a copy of the layout
   */
  copy() {
    const { width, height, exclude, unlockCategory, id } = this;
    const copy = new Layout({ width, height, exclude, unlockCategory, id });
    copy.matrix = this.matrix.map(row => row.slice());
    return copy;
  }

  /**
   * Returns a copy of the layout with a solvable pattern of tiles
   * @param {Number} iterations number of iterations to generate the pattern
   * @returns {Layout} a Layout object with a random pattern
   */
  generatePosition(iterations) {

    const copy = this.copy();
    copy.setAllTiles(modulo.value - 1);

    for (let i = 0; i < iterations; i++) {
      
      let row;
      let tile;

      do {
        row = Math.floor(Math.random() * copy.height);
        tile = Math.floor(Math.random() * copy.width);
      } while(!copy.isTile(row, tile));
      
      copy.swapTiles(row, tile, -1);
    }
    
    // Regenerate if the matrix is already solved
    if (copy.matrix.every(row => row.every(tile => tile === modulo.value || tile === -1))) {
      return this.generatePosition(iterations);
    }
    
    if (copy.nTiles() < 50) {
      const { solutions, shortest, zerows, } = solve(copy.matrix);
      
      const solution = solutions[shortest];
      const threshold = zerows !== 1 ? 
              (iterations > zerows ? zerows : iterations) : 
              Math.floor(iterations - modulo.value * (iterations / 3) + 2);
      if (solution.moves < threshold) {
        return this.generatePosition(iterations);
      }
    }

    return copy;
  }

  /**
   * Calculate the array of exclusion indices from a layout matrix
   * @param {Number[][]} matrix
   * @returns {Number[]} the array of exclusion indices
   */
  static getExcludeFromMatrix(matrix) {
    const width = matrix[0].length;
    return matrix
      .map((row, y) => row.map((cell, x) => cell === -1 ? y * width + x : null)).flat().filter(e => e || e === 0);
  }

  /**
   * Parses a string or object into a Layout object
   * @param {String|Object} state the string or object to parse
   * @returns {Layout} the parsed Layout object
   */
  static hydrate(state) {
    const { width, height, exclude, unlockCategory } = 
      typeof state === "string" ? JSON.parse(string) : state;
    const layout = new Layout({
      width, height, exclude, unlockCategory
    });
    return layout;
  }

  /**
   * Serializes a layout into a string
   * @param {Layout} layout the layout to serialize
   * @returns {String} the serialized layout
   */
  static serialize(layout) {
    return JSON.stringify(layout);
  }

  static modulo(n) {
    return ((n % modulo.value) + modulo.value) % modulo.value;
  }
}

