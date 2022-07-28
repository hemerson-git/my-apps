export function removeBegginingZero(str: string): string {
  const numberWithoutBegginingZero = str.replace(/^0+/, "");
  return numberWithoutBegginingZero;
}

export function avoidMultipleFollowingOperations(
  value: string,
  newOperation: string
) {
  // const valueWithoutMultipleOperations = value.replace(
  //   /\+\+|--|*|\/|/g,
  //   newOperation
  // );
  return;
}
