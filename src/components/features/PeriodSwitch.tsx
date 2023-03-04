import { useState } from "react";
import Switch from "../ui/Switch/Switch";

const PeriodSwitch: React.FC<{}> = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const onPeriodChange = () => {
    setIsYearly((value) => !value);
  };

  const onSetPeriodMonthly = () => {
    setIsYearly(false);
  };

  const onSetPeriodYearly = () => {
    setIsYearly(true);
  };

  return (
    <div className="p-4 bg-alabaster rounded-lg flex justify-center gap-5">
      <span
        className={[
          "text-sm font-medium hover:cursor-pointer",
          !isYearly ? "text-marine-blue" : "text-cool-gray",
        ].join(" ")}
        onClick={onSetPeriodMonthly}
      >
        Monthly
      </span>
      <Switch onChange={onPeriodChange} checked={isYearly} />
      <span
        className={[
          "text-sm font-medium hover:cursor-pointer",
          isYearly ? "text-marine-blue" : "text-cool-gray",
        ].join(" ")}
        onClick={onSetPeriodYearly}
      >
        Yearly
      </span>
    </div>
  );
};

export default PeriodSwitch;
