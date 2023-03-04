import Step from "../../ui/Step/Step";

interface StepperProps {
  steps: {
    number: string;
    label: string;
  }[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <aside className="p-5 rounded-xl bg-no-repeat bg-center bg-cover bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/assets/images/bg-sidebar-desktop.svg')]">
      <ol className="list-none flex gap-5 justify-center md:flex-col md:gap-7">
        {steps.map((step) => (
          <Step number={step.number} label={step.label} />
        ))}
      </ol>
    </aside>
  );
};

export default Stepper;
