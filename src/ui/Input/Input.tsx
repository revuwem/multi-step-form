import { Path, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label: Path<ISubscription>;
  register: UseFormRegister<ISubscription>;
  required: boolean;
}

const InputStyles = {
  base: "w-full text-sm text-marine-blue font-medium py-2.5 px-3.5 border border-light-gray rounded-md",
  focusVisible: "focus-visible:outline-none focus-visible:border-purplish-blue",
  error: "border-strawberry-red",
};

const Input: React.FC<InputProps> = ({
  error = false,
  label,
  register,
  required,
  ...props
}) => {
  return (
    <input
      className={[
        InputStyles.base,
        InputStyles.focusVisible,
        error && InputStyles.error,
      ].join(" ")}
      {...register(label, { required })}
      {...props}
    />
  );
};

export default Input;
