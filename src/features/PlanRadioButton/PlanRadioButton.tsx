import { UseControllerProps, useController } from "react-hook-form";

interface PlanRadioButtonProps
  extends UseControllerProps<ISubscription, "plan">,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof UseControllerProps<ISubscription, "plan">
    > {
  id: string;
  content: {
    title: string;
    label: string;
    note?: string;
    iconSrc: string;
  };
}

const PlanRadioButton: React.FC<PlanRadioButtonProps> = ({
  content,
  checked,
  ...props
}) => {
  const {
    field: { value: plan, onChange },
  } = useController(props);

  const labelClassName = [
    "p-3 flex flex-col gap-10 border rounded hover:border-purplish-blue hover:cursor-pointer",
    plan === props.value ? "border-purplish-blue" : "border-light-gray",
    plan === props.value ? "bg-alabaster" : "bg-white",
  ].join(" ");

  return (
    <label className={labelClassName}>
      <div className="">
        <img src={content.iconSrc} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-marine-blue font-medium">{content.title}</p>
        <p className="text-sm text-cool-gray">{content.label}</p>
        {content.note && (
          <p className="text-sm text-marine-blue">{content.note}</p>
        )}
      </div>
      <input type="radio" className="hidden" {...props} onChange={onChange} />
    </label>
  );
};

export default PlanRadioButton;
