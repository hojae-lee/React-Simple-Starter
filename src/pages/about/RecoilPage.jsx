import RecoilComponent from "./components/RecoilComponent";
import { useRecoilValue } from "recoil";
import { countState } from "@recoil/countAtom";
import {
  celsiusTemperatureState,
  fahrenheitTemperatureSelector,
} from "@recoil/tempAtom";

function RecoilPage() {
  const count = useRecoilValue(countState);
  const celsiusTemp = useRecoilValue(celsiusTemperatureState);
  const fahrenheitTemp = useRecoilValue(fahrenheitTemperatureSelector);

  return (
    <div>
      Parent: {count}
      <br />
      celsiusTemp: {celsiusTemp}
      <br />
      fahrenheitTemp: {fahrenheitTemp}
      <RecoilComponent />
    </div>
  );
}

export default RecoilPage;
