export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export function chunk(arr: any[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //최댓값도 포함, 최솟값도 포함
}

export function getRandomBoolean(): boolean {
  return Boolean(getRandomInt(0, 1))
}

export function getRandomString(prefix: string, count: number) {
  return [prefix, getRandomInt(0, count)].join('')
}

export function getRandomPick<T>(list: T[] = []): T {
  return list[getRandomInt(0, list.length - 1)]
}

export function getRandomTime(): string {
  return [getRandomInt(0, 24).toString().padStart(2, '0'), getRandomInt(0, 60).toString().padStart(2, '0')].join(':')
}

export function getRandomDays(): number[] {
  return [0, 1, 2, 3, 4, 5, 6]
}
