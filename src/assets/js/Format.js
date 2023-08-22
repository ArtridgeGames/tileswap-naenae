export function formatTime(timeInS) {
  const minutes = Math.floor(timeInS/60).toString();
  const seconds = (timeInS%60).toString();
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}
