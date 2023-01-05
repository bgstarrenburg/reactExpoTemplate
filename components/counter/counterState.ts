import { AppState } from "../../AppState";

export type CounterState = {
  count: number;
};

export const initialCounterState = (): CounterState => ({
  count: 0,
});

export const counterStateUpdaters = {
  upCount: (state: CounterState): CounterState => ({
    count: state.count + 1,
  }),
};
