import { Process } from "./Process";

export default function RandomGroup() {
  const randomSeed = Math.random();
  return (
    <main>
      <Process randomSeed={randomSeed} />
    </main>
  );
}
