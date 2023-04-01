import { useMemo } from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface AddonCheckboxProps
  extends UseControllerProps<ISubscription, "addons">,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof UseControllerProps<ISubscription, "addons">
    > {
  id: string;
  content: {
    name: string;
    description: string;
    price: number;
    period: "mo" | "yr";
  };
}

const AddonCheckbox: React.FC<AddonCheckboxProps> = ({ content, ...props }) => {
  const {
    field: { value, onChange },
  } = useController({
    name: props.name,
    control: props.control,
  });
  const checked = useMemo(() => value[props.id] ?? false, [value]);

  const containerClassName = [
    "text-base p-5 flex items-center gap-5 border rounded transition hover:border-purplish-blue hover:cursor-pointer",
    checked ? "border-purplish-blue" : "border-light-gray",
    checked ? "bg-alabaster" : "bg-white",
  ].join(" ");

  const onInputChange = () => {
    const newValue = { ...value };
    // if addon already exist, then change value to opposite,
    // else add with "true" value
    newValue[props.id]
      ? (newValue[props.id] = !newValue[props.id])
      : (newValue[props.id] = true);
    onChange(newValue);
  };

  return (
    <label
      htmlFor={props.name}
      className={containerClassName}
      onClick={onInputChange}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onInputChange}
        className="hidden"
      />
      <div
        className={[
          "w-[1.25em] h-[1.25em] grid place-content-center transition border border-light-gray rounded",
          checked ? "bg-purplish-blue" : "",
        ].join(" ")}
      >
        <svg
          className="pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
        >
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="m1 4 3.433 3.433L10.866 1"
          />
        </svg>
      </div>
      <div className="grow">
        <p className="text-marine-blue font-medium">{content.name}</p>
        <p className="text-sm text-cool-gray">{content.description}</p>
      </div>
      <p className="text-sm text-purplish-blue">{`$${content.price}/${content.period}`}</p>
    </label>
  );
};

export default AddonCheckbox;
