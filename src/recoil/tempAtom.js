import { atom, selector } from "recoil";

// 섭씨 온도를 저장하는 Recoil atom
export const celsiusTemperatureState = atom({
  key: "celsiusTemperatureState",
  default: 0, // 초기값은 0도로 설정
});

// 화씨 온도를 계산하는 Recoil selector
export const fahrenheitTemperatureSelector = selector({
  key: "fahrenheitTemperatureSelector",
  get: ({ get }) => {
    const celsius = get(celsiusTemperatureState);
    return (celsius * 9) / 5 + 32; // 섭씨를 화씨로 변환하는 공식
  },
});
