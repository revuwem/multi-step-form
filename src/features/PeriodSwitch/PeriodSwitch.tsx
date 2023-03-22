import { useState } from "react";
import Switch from "../../ui/Switch/Switch";

const PeriodSwitch: React.FC<{}> = () => {
  const [period, setPeriod] = useState<SubscriptionPeriod>("month");

  const onPeriodChange = () => {
    setPeriod((period) => (period === "month" ? "year" : "month"));
  };

  const onSetPeriodMonthly = () => {
    setPeriod("month");
  };

  const onSetPeriodYearly = () => {
    setPeriod("year");
  };

  return (
    <div className="p-4 bg-alabaster rounded-lg flex justify-center gap-5">
      <span
        className={[
          "text-sm font-medium hover:cursor-pointer",
          period === "month" ? "text-marine-blue" : "text-cool-gray",
        ].join(" ")}
        onClick={onSetPeriodMonthly}
      >
        Monthly
      </span>
      <Switch onChange={onPeriodChange} checked={period === "year"} />
      <span
        className={[
          "text-sm font-medium hover:cursor-pointer",
          period === "year" ? "text-marine-blue" : "text-cool-gray",
        ].join(" ")}
        onClick={onSetPeriodYearly}
      >
        Yearly
      </span>
    </div>
  );
};

export default PeriodSwitch;
