interface StepProps {
  number: string;
  label: string;
  active?: boolean;
}

const Step: React.FC<StepProps> = ({ number, label, active = false }) => {
  return (
    <div className="flex gap-3 items-center">
      <span
        className={[
          "text-base font-medium px-3 py-1 rounded-full border",
          active ? "bg-light-blue text-marine-blue" : "text-white border-white",
        ].join(" ")}
      >
        {number}
      </span>
      <div className="hidden md:block">
        <p className="text-xs uppercase text-light-gray">Step {number}</p>
        <p className="text-sm text-white font-bold uppercase ">{label}</p>
      </div>
    </div>
  );
};

export default Step;
