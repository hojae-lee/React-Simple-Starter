import { create } from "zustand";
import zsEnvDevtools from "./modules/zsEnvDevtools";

const counterStore = (set) => ({
  count: 0,
  increment: (val) => set((state) => ({ count: state.count + (val ?? 1) })),
  decrement: (val) => set((state) => ({ count: state.count - (val ?? 1) })),
  reset: () => set(() => ({ count: 0 })),
});

const useCounterStore = create(zsEnvDevtools(counterStore));

export { useCounterStore };
