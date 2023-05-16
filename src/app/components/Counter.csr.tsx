"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, reset } from "@/redux/slices/counterSlice";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(({ counter }) => counter.value);

  const onIncreaseCount = () => dispatch(increment());
  const onDecreaseCount = () => dispatch(decrement());
  const onResetCount = () => dispatch(reset());

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={onDecreaseCount}>decrement</button>
      <button onClick={onIncreaseCount}>increment</button>
      <button onClick={onResetCount}>reset</button>
    </div>
  );
}
