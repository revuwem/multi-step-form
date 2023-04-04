import { useLocation } from "react-router-dom";
import Step from "../../ui/Step/Step";

interface StepperProps {
  steps: {
    number: string;
    label: string;
    path: string;
  }[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const { pathname } = useLocation();

  return (
    <aside className="p-5 rounded-xl bg-no-repeat bg-center bg-cover bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/assets/images/bg-sidebar-desktop.svg')]">
      <ol className="list-none flex gap-5 justify-center md:flex-col md:gap-7">
        {steps.map((step) => (
          <Step
            key={step.label}
            number={step.number}
            label={step.label}
            active={pathname === step.path}
          />
        ))}
      </ol>
    </aside>
  );
};

export default Stepper;
