export function getParsedTime(time: Date) {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return { hours, minutes, seconds };
}

export function getConvertedTimeToSeconds(timeInSeconds: number) {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");

  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const seconds = ((timeInSeconds % 3600) % 60).toString().padStart(2, "0");

  return { hours, minutes, seconds };
}
