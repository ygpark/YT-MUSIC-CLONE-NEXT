import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc: "/img/daldam music - 차.jpeg",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
