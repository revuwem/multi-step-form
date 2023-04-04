import { UseControllerProps, useController } from "react-hook-form";

interface PlanRadioButtonProps
  extends UseControllerProps<ISubscription, "plan">,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof UseControllerProps<ISubscription, "plan">
    > {
  content: {
    name: string;
    price: number;
    icon: string;
    note?: string;
    period: "mo" | "yr";
  };
}

const PlanRadioButton: React.FC<PlanRadioButtonProps> = ({
  content,
  ...props
}) => {
  const {
    field: { value: plan, onChange },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { required: true },
  });

  const labelClassName = [
    "p-3 flex md:flex-col gap-5 md:gap-10 border rounded hover:border-purplish-blue hover:cursor-pointer",
    plan === props.value ? "border-purplish-blue" : "border-light-gray",
    plan === props.value ? "bg-alabaster" : "bg-white",
  ].join(" ");

  const onInputChange = () => onChange(props.value);

  return (
    <label className={labelClassName}>
      <input
        type="radio"
        className="hidden"
        {...props}
        onChange={onInputChange}
      />
      <div>
        <img src={content.icon} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-marine-blue font-medium">{content.name}</p>
        <p className="text-sm text-cool-gray">{`$${content.price}/${content.period}`}</p>
        {content.note && (
          <p className="text-sm text-marine-blue">{content.note}</p>
        )}
      </div>
    </label>
  );
};

export default PlanRadioButton;
