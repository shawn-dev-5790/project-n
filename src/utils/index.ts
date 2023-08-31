
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function chunk(arr:any[], size:number) {
  return Array.from({ length : Math.ceil(arr.length / size)}, (_, i) => arr.slice(i * size, i * size + size))
}