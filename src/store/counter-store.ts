import { createStore } from "zustand/vanilla";
import {
  AlbumData,
  CuadrosData,
  LocationSpecials,
  PropsSpecials,
  ScenariosData,
} from "@/data/mini-session-data";

export type CounterState = {
  steps: number;
  count: number;
  totalPricePhotos: number;
  album: AlbumData;
  frame: CuadrosData;
  props: PropsSpecials[];
  scenarios: ScenariosData;
  locations: LocationSpecials;
};

export type CounterActions = {
  decrementSteps: () => void;
  incrementSteps: () => void;
  decrementCount: () => void;
  incrementCount: () => void;
  updateTotalPricePhotos: (price: number) => void;
  selectAlbum: (album: AlbumData) => void;
  selectFrame: (frame: CuadrosData) => void;
  addProp: (props: PropsSpecials) => void;
  removeProp: (props: PropsSpecials) => void;
  selectScenario: (scenario: ScenariosData) => void;
  selectLocation: (location: LocationSpecials) => void;
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
    available: [],
  },
  frame: {
    id: 0,
    title: "",
    price: 0,
  },
  props: [],
  scenarios: {
    id: 0,
    title: "",
    price: [
      {
        id: 0,
        price: 0,
        description: "",
      },
    ],
    available: [],
  },
  locations: {
    id: 0,
    title: "",
    image: {
      src: "",
      alt: "",
    },
    price: 0,
    available: [],
  },
};

export const initCounterStore = (): CounterState => {
  return {
    steps: defaultInitState.steps,
    count: defaultInitState.count,
    totalPricePhotos: defaultInitState.totalPricePhotos,
    album: defaultInitState.album,
    frame: defaultInitState.frame,
    props: defaultInitState.props,
    scenarios: defaultInitState.scenarios,
    locations: defaultInitState.locations,
  };
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementSteps: () => set((state) => ({ steps: state.steps - 1 })),
    incrementSteps: () => set((state) => ({ steps: state.steps + 1 })),
    decrementCount: () =>
      set((state) => ({ count: Math.max(state.count - 1, 3) })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    updateTotalPricePhotos: (price: number) =>
      set((state) => ({ totalPricePhotos: price })),
    selectAlbum: (album: AlbumData) => set((state) => ({ album: album })),
    selectFrame: (frame: CuadrosData) => set((state) => ({ frame: frame })),
    addProp: (newProp: PropsSpecials) =>
      set((state) => ({
        props: state.props.includes(newProp)
          ? state.props
          : [...state.props, newProp],
      })),
    removeProp: (propToRemove: PropsSpecials) =>
      set((state) => ({
        props: state.props.filter((prop) => prop.id !== propToRemove.id),
      })),
    selectScenario: (scenario: ScenariosData) =>
      set((state) => ({ scenarios: scenario })),
    selectLocation: (location: LocationSpecials) =>
      set((state) => ({ locations: location })),
  }));
};
