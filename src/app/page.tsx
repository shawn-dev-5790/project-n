import { Counter } from "./components/Counter.csr";
import { TodoList } from "./components/TodoList.csr";

export default function Home() {
  return (
    <main>
      <Counter />
      <TodoList />
    </main>
  );
}
