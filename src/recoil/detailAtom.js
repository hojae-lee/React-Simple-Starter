import { atom, selector } from "recoil";

export const detailInfoState = atom({
  key: "detailInfoState",
  default: {
    title: "",
    body: "",
  },
});

export const detailInfoSelector = selector({
  key: "detailInfoSelector",
  get: ({ get }) => {
    const detailInfo = get(detailInfoState);
    return detailInfo;
  },
});
