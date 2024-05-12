import { startTransition } from "react";
import { useCounterStore } from "@zustand/counter";
import { Button } from "antd";

function CounterBtn() {
  const { count, increment, decrement } = useCounterStore();
  const degree = 1;

  const counterBtnHanlder = (mode, e) => {
    e.stopPropagation();

    if (mode === "increment") {
      startTransition(() => {
        increment(degree);
      });
    } else {
      startTransition(() => {
        decrement(degree);
      });
    }
  };

  return (
    <div>
      <Button type="primary" onClick={(e) => counterBtnHanlder("increment", e)}>
        증가!!
      </Button>
      <Button type="dashed" onClick={(e) => counterBtnHanlder("decrement", e)}>
        감소!!
      </Button>
      <span style={{ color: "#fff" }}>{count}</span>
    </div>
  );
}

export default CounterBtn;
