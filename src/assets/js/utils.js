export function require(...args) {
  if (args.some(arg => arg === undefined || arg === null)) {
    throw new Error('Missing argument');
  }
}