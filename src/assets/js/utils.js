export function require(...args) {
  if (args.some(arg => arg === undefined || arg === null)) {
    throw new Error('Missing argument');
  }
}

export function expect(...args) {
  if (args.some(arg => arg === false)) {
    throw new Error('Expectation failed');
  }
}