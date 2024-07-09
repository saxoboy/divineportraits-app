import { createStore } from "zustand/vanilla";
import { AlbumData, CuadrosData } from "@/data/mini-session-data";

export type CounterState = {
  steps: number;
  count: number;
  totalPricePhotos: number;
  album: AlbumData;
  frame: CuadrosData;
};

export type CounterActions = {
  decrementSteps: () => void;
  incrementSteps: () => void;
  decrementCount: () => void;
  incrementCount: () => void;
  updateTotalPricePhotos: (price: number) => void;
  selectAlbum: (album: AlbumData) => void;
  selectFrame: (frame: CuadrosData) => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  steps: 0,
  count: 3,
  totalPricePhotos: 0,
  album: {
    id: 0,
    title: "",
    description: "",
    price: 0,
  },
  frame: {
    id: 0,
    title: "",
    price: 0,
  },
};

export const initCounterStore = (): CounterState => {
  return {
    steps: defaultInitState.steps,
    count: defaultInitState.count,
    totalPricePhotos: defaultInitState.totalPricePhotos,
    album: defaultInitState.album,
    frame: defaultInitState.frame,
  };
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementSteps: () => set((state) => ({ steps: state.steps - 1 })),
    incrementSteps: () => set((state) => ({ steps: state.steps + 1 })),
    decrementCount: () => set((state) => ({ count: Math.max(state.count - 1, 3) })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    updateTotalPricePhotos: (price: number) => set((state) => ({ totalPricePhotos: price })),
    selectAlbum: (album: AlbumData) => set((state) => ({ album: album })),
    selectFrame: (frame: CuadrosData) => set((state) => ({ frame: frame })),
  }));
};
