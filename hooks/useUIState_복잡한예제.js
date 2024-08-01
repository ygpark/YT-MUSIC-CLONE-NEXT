import create from "zustand";

const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  controller: null, // AbortController를 저장할 상태
  fetchData: async () => {
    set((state) => {
      // 기존 요청 취소
      if (state.controller) {
        state.controller.abort();
      }
      // 새로운 AbortController 생성
      const controller = new AbortController();
      return { loading: true, error: null, controller };
    });

    try {
      const response = await fetch("https://api.example.com/data", {
        signal: get().controller.signal,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ data, loading: false, controller: null });
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        set({ error, loading: false, controller: null });
      }
    }
  },
  resetData: () =>
    set((state) => {
      // 기존 요청 취소
      if (state.controller) {
        state.controller.abort();
      }
      return { data: null, loading: false, error: null, controller: null };
    }),
}));

export default useStore;
