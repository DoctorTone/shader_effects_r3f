import { create } from "zustand";

const useStore = create((set) => ({
  activeEffect: "pattern1",
  setActiveEffect: (effect) => set({ activeEffect: effect }),
}));

export default useStore;
