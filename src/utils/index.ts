export * from "./types";

export const getStringSeqId = (id: number) => {
  return String(id);
};
export const getRandomType = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
