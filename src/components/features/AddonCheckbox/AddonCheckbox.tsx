interface AddonCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  content: {
    title: string;
    label: string;
    price: string;
  };
  onChange: () => void;
}

const AddonCheckbox: React.FC<AddonCheckboxProps> = ({ content, ...props }) => {
  const { title, label, price } = content;

  const containerClassName = [
    "text-base p-5 flex items-center gap-5 border rounded transition hover:border-purplish-blue hover:cursor-pointer",
    props.checked ? "border-purplish-blue" : "border-light-gray",
    props.checked ? "bg-alabaster" : "bg-white",
  ].join(" ");

  return (
    <label htmlFor={props.name} className={containerClassName}>
      <input type="checkbox" {...props} className="hidden" />
      <div
        className={[
          "w-[1.25em] h-[1.25em] grid place-content-center transition border border-light-gray rounded",
          props.checked ? "bg-purplish-blue" : "",
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
        <p className="text-marine-blue font-medium">{title}</p>
        <p className="text-sm text-cool-gray">{label}</p>
      </div>
      <p className="text-sm text-purplish-blue">{price}</p>
    </label>
  );
};

export default AddonCheckbox;
