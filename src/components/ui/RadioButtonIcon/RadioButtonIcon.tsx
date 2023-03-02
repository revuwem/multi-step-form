interface RadioButtonIconProps {
  id: string;
  name: string;
  checked: boolean;
  content: {
    title: string;
    label: string;
    note: string;
    iconSrc: string;
  };
  onChange: () => void;
}

const RadioButtonIcon: React.FC<RadioButtonIconProps> = ({
  checked,
  content,
  ...props
}) => {
  const labelClassName = [
    "max-w-[8.625rem] p-3 flex flex-col gap-10 border rounded hover:border-purplish-blue hover:cursor-pointer",
    checked ? "border-purplish-blue" : "border-light-gray",
  ].join(" ");

  const { title, label, note, iconSrc } = content;

  return (
    <label className={labelClassName}>
      <div className="">
        <img src={iconSrc} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-marine-blue font-medium">{title}</p>
        <p className="text-sm text-cool-gray">{label}</p>
        {note && <p className="text-sm text-marine-blue">{note}</p>}
      </div>
      <input type="radio" className="hidden" checked={checked} />
    </label>
  );
};

export default RadioButtonIcon;
