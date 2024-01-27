import { ChallengePattern, PatternSequence } from './challenges/Challenge.js'
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
      width: 3,
      height: 3,
      exclude: []
    }),
  }),
  corrupted
)

sequence.next().layout.matrix;
sequence.next().layout.matrix;
sequence.next().layout.matrix;


sequence.reset();
console.log(sequence.state.layout.matrix);

sequence.next().layout.matrix;
sequence.next().layout.matrix;
sequence.next().layout.matrix;