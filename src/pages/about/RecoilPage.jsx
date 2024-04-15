import RecoilComponent from "./components/RecoilComponent";
import { useRecoilState } from "recoil";
import { countState } from "@atom";

function RecoilPage() {
  const [count] = useRecoilState(countState);

  return (
    <div>
      Parent: {count}
      <RecoilComponent />
    </div>
  );
}

export default RecoilPage;
