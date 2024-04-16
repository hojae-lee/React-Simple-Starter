import { useRecoilState } from "recoil";
import { countState } from "@recoil/countAtom";

function RecoilComponent() {
  const [count, setCount] = useRecoilState(countState);
  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button type="button" onClick={clickHandler}>
        count++
      </button>
    </div>
  );
}

export default RecoilComponent;
