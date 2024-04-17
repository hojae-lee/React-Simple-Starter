import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@store/features/counterSlice";

function ReduxComponet() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button
        type="button"
        aria-label="increment"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        type="button"
        aria-label="decrement"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <button
        type="button"
        aria-label="incrementByAmount"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        incrementByAmount
      </button>
    </div>
  );
}

export default ReduxComponet;
