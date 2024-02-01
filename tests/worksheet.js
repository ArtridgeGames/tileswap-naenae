import { getPatternFromIdWithPadding } from '../src/assets/js/challenges/ChallengeData.js'

const layout = getPatternFromIdWithPadding(168, 6).layout;

const originalWidth = layout.width;
const originalHeight = layout.height;

const { width, height, matrix } = layout.actualSize();

console.log(originalWidth, originalHeight);

console.log(width, height);

// originalWidth = width + 2*padding
// padding_x = (originalWidth - width) / 2
// padding_y = (originalHeight - height) / 2

const padding_x = (originalWidth - width) / 2;
const padding_y = (originalHeight - height) / 2;

console.log(padding_x, padding_y);