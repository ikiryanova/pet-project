import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";

export function createRuduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}