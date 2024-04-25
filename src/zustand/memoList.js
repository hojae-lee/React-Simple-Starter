import { create } from "zustand";

export const useMemoStore = create((set) => ({
  memoList: [],
  addMemo: (val) => {
    set((state) => ({
      memoList: [
        ...state.memoList,
        { content: val, id: new Date().getMilliseconds() + val },
      ],
    }));
  },
  removeMemo: (id) =>
    set((state) => ({
      memoList: state.memoList.filter((memo) => memo.id !== id),
    })),
}));
