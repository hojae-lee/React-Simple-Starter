import { useMemoStore } from "@zustand/memoList";
import AddMemo from "./components/AddMemo";

function MemoIndex() {
  const { memoList, removeMemo } = useMemoStore();
  return (
    <div>
      <AddMemo />
      {memoList.map((memo) => (
        <div key={memo.id} onClick={() => removeMemo(memo.id)}>
          {memo.content}
        </div>
      ))}
    </div>
  );
}

export default MemoIndex;
