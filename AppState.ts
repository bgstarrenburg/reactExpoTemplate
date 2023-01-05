import {
  CounterState,
  initialCounterState,
} from "./components/counter/counterState";
import { Updater } from "./components/utils";

export type AppState = {
  counter: CounterState;
};

export const initialAppState = (): AppState => ({
  counter: initialCounterState(),
});

export const AppStateUpdaters = {
  updateCounterState:
    (updater: Updater<CounterState>) =>
    (state: AppState): AppState => ({
      ...state,
      counter: updater(state.counter),
    }),
};
