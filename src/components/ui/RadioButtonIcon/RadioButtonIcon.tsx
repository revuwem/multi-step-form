interface RadioButtonIconProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const RadioButtonIcon: React.FC<RadioButtonIconProps> = ({
  checked,
  ...props
}) => {
  const labelClassName = [
    "max-w-[8.625rem] p-3 flex flex-col gap-10 border rounded hover:border-purplish-blue hover:cursor-pointer",
    checked ? "border-purplish-blue" : "border-light-gray",
  ].join(" ");

  return (
    <label className={labelClassName}>
      <div className="">
        <img src="assets/images/icon-arcade.svg" alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-marine-blue font-medium">Arcade</p>
        <p className="text-sm text-cool-gray">$90/yr</p>
        <p className="text-sm text-marine-blue">2 months free</p>
      </div>
      <input type="radio" className="hidden" checked={checked} />
    </label>
  );
};

export default RadioButtonIcon;
