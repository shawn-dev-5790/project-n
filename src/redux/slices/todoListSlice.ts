import { ITodoEntity, TodoEntity } from "@/dtr/entities/TodoEntity";
import { TTodoEntityType, getRandomType } from "@/utils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITodoListInitialState {
  todoList: TodoEntity[];
}

const initialState: ITodoListInitialState = {
  todoList: [],
};

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    reset: () => initialState,
    createTodo: (state) => {
      state.todoList.push(
        new TodoEntity({
          id: "",
          name: "",
          type: getRandomType(["todo", "doing", "done"]) as TTodoEntityType,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        })
      );
    },
    updateTodo: (state, action: PayloadAction<ITodoEntity["id"]>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) todo.update();
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<ITodoEntity["id"]>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) todo.delete();
        return todo;
      });
    },
  },
});

export const { reset, createTodo, updateTodo, deleteTodo } = todoList.actions;

export default todoList.reducer;
