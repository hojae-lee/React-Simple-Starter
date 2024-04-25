import { useForm } from "react-hook-form";

function UseForm() {
  const { register, handleSubmit } = useForm({
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
      <button type="submit">제출</button>
    </form>
  );
}

export default UseForm;
