import ErrorLabel from "../../ui/ErrorLabel/ErrorLabel";
import Input from "../../ui/Input/Input";
import Label from "../../ui/Label/Label";

interface FormControl extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const FormControl: React.FC<FormControl> = ({
  label,
  error = false,
  ...props
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-2">
        <Label htmlFor={props.id}>{label}</Label>
        {error && <ErrorLabel>This field is required</ErrorLabel>}
      </div>
      <Input error={error} {...props} />
    </div>
  );
};

export default FormControl;
