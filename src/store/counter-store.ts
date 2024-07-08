import { createStore } from "zustand/vanilla";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  count: 3,
};

export const initCounterStore = (): CounterState => {
  return { count: defaultInitState.count };
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () =>
      set((state) => ({ count: Math.max(state.count - 1, 3) })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
