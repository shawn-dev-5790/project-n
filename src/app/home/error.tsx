"use client";

import { IBaseNextComponentError } from "@/assets/interface";

export default function Error({ error, reset }: IBaseNextComponentError) {
  return (
    <div>
      <p>App Error</p>
      {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
      <button onClick={() => reset()}>recovery</button>
    </div>
  );
}
