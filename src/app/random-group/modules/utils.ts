export function chunkByMinMax(
  total: number,
  [min, max]: [number, number]
): number[] {
  let chunked: number[] = [];
  let chunkSize: number = 0;

  if (total < min) return [total];

  while (total > 0) {
    chunkSize = total % max > 0 ? min : max;
    chunked.unshift(chunkSize);
    total -= chunkSize;
  }

  return chunked;
}

export function getRandomIndex(arr: any[], seed: number): number {
  return Math.floor(seed * arr.length);
}
