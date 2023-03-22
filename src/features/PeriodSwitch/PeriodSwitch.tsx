import { useController, UseControllerProps } from "react-hook-form";
import Switch from "../../ui/Switch/Switch";

interface PeriodSwitchProps
  extends UseControllerProps<ISubscription, "period"> {}

const PeriodSwitch: React.FC<PeriodSwitchProps> = (props) => {
  const {
    field: { value: period, onChange },
  } = useController(props);

  const onPeriodChange = () => {
    onChange(period === "month" ? "year" : "month");
  };

  const onSetPeriodMonthly = () => {
    onChange("month");
  };

  const onSetPeriodYearly = () => {
    onChange("year");
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
