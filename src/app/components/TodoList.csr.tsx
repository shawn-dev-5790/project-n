"use client";

import { TodoEntity } from "@/dtr/entities/TodoEntity";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  createTodo,
  deleteTodo,
  reset,
  updateTodo,
} from "@/redux/slices/todoListSlice";

export function TodoList() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(({ todoList }) => todoList.todoList);

  const onCreateTodo = () => dispatch(createTodo());
  const onResetTodoList = () => dispatch(reset());

  return (
    <div>
      <button onClick={onCreateTodo}>createTodo</button>
      <button onClick={onResetTodoList}>reset</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
            <div>isTypeTodo: {String(todo.isTypeTodo())}</div>
            <div>isTypeDoing: {String(todo.isTypeDoing())}</div>
            <div>isTypeDone: {String(todo.isTypeDone())}</div>
            <button onClick={() => dispatch(updateTodo(todo.id))}>
              update
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
