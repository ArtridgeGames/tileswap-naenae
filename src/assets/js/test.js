import { ChallengePattern, PatternSequence } from './challenges/ChallengeNew.js'
import { corrupted } from './challenges/ChallengeData.js';
import { Layout } from './Layout.js';

// import { rotateMatrix, rotateNTimes } from "./solve/solve.js"
const target = [
  [
    -1,
    -1,
    -1,
    1
  ],
  [
    -1,
    -1,
    1,
    1
  ],
  [
    -1,
    1,
    0,
    1
  ],
  [
    1,
    1,
    0,
    0
  ],
  [
    -1,
    1,
    0,
    1
  ],
  [
    -1,
    -1,
    1,
    1
  ],
  [
    -1,
    -1,
    -1,
    1
  ]
]

const base = [
  [
    -1,
    -1,
    -1,
    1
  ],
  [
    -1,
    -1,
    1,
    0
  ],
  [
    -1,
    1,
    0,
    0
  ],
  [
    1,
    0,
    0,
    0
  ],
  [
    -1,
    1,
    0,
    0
  ],
  [
    -1,
    -1,
    1,
    0
  ],
  [
    -1,
    -1,
    -1,
    1
  ]
]

// console.log("base: ",rotateMatrix(base), ",", "target: ", rotateMatrix(target))


const sequence = new PatternSequence(
  new ChallengePattern({
    id: 0,
    layout: new Layout({
      width: 7,
      height: 7,
      exclude: []
    }),
  }),
  corrupted
)

console.log(sequence.next().layout.matrix);
console.log(sequence.next().layout.matrix);
console.log(sequence.next().layout.matrix);
console.log(sequence.next().layout.matrix);