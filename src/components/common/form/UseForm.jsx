import { useForm } from "react-hook-form";
import MyTextField from "@components/common/antd/MyTextField";

function UseForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name", { required: true })} />
      {errors.name && <span>이름을 입력해주세요.</span>}
      <MyTextField
        control={control}
        name="textField"
        rules={{ required: true }}
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default UseForm;
