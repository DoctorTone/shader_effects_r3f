import { create } from "zustand";

const useStore = create((set) => ({
  activeEffect: "block",
  setActiveEffect: (effect) => set({ activeEffect: effect }),
}));

export default useStore;
