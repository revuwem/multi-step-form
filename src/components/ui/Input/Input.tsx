interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const InputStyles = {
  base: "text-sm text-marine-blue font-medium py-2.5 px-3.5 border border-light-gray rounded-md",
  focusVisible: "focus-visible:outline-none focus-visible:border-purplish-blue",
  error: "border-strawberry-red",
};

const Input: React.FC<InputProps> = ({ error = false, ...props }) => {
  return (
    <input
      className={[
        InputStyles.base,
        InputStyles.focusVisible,
        error && InputStyles.error,
      ].join(" ")}
      {...props}
    />
  );
};

export default Input;
