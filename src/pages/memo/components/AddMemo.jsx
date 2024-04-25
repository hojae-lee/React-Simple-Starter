import { useForm } from "react-hook-form";
import MyTextField from "@components/common/antd/MyTextField";

import { useMemoStore } from "@zustand/memoList";

function AddMemo() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      memo: "",
    },
  });
  const { addMemo } = useMemoStore();

  const onSubmit = (data) => {
    addMemo(data.memo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyTextField control={control} name="memo" rules={{ required: true }} />
      <button type="submit">제출</button>
    </form>
  );
}

export default AddMemo;
