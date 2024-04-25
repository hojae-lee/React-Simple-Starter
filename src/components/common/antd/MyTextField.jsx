import { useController } from "react-hook-form";
import { Input } from "antd";

function MyTextField({ name, control, rules }) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      <Input
        {...field}
        onChange={(e) => field.onChange(e.target.value)}
        value={field.value}
      />
      {fieldState.error && <span>텍스트 필드를 채워주세요.</span>}
    </>
  );
}

export default MyTextField;
