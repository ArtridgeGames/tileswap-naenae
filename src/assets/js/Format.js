export function formatTime(timeInS) {
  const minutes = Math.floor(timeInS/60).toString();
  const seconds = (timeInS%60).toString();
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

export function formatTimeMS(timeInMS) {
  const minutes = Math.floor(timeInMS/60000).toString();
  const seconds = Math.floor((timeInMS%60000)/1000).toString();
  const milliseconds = (timeInMS%1000).toString();
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}:${milliseconds.padStart(3, '0')}`;
}

export function formatTimeHundreds(timeInMS) {
  const minutes = Math.floor(timeInMS/60000).toString();
  const seconds = Math.floor((timeInMS%60000)/1000).toString();
  const hundreds = Math.floor((timeInMS%1000)/10).toString();
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}:${hundreds.padStart(2, '0')}`;
}