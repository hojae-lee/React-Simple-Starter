import RecoilComponent from "./components/RecoilComponent";
import { useRecoilValue } from "recoil";
import { countState } from "@recoil/countAtom";

function RecoilPage() {
  const count = useRecoilValue(countState);

  return (
    <div>
      Parent: {count}
      <RecoilComponent />
    </div>
  );
}

export default RecoilPage;
