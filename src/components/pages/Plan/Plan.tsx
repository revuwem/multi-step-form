import PeriodSwitch from "../../features/PeriodSwitch/PeriodSwitch";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import FormControl from "../../widgets/FormControl/FormControl";
import PlanRadioButton from "../../widgets/PlanRadioButton/PlanRadioButton";
import Stepper from "../../widgets/Stepper/Stepper";

const steps = [
  {
    number: "1",
    label: "Your info",
  },
  {
    number: "2",
    label: "Select plan",
  },
  {
    number: "3",
    label: "Add-ons",
  },
  {
    number: "4",
    label: "Summary",
  },
];

const Plan: React.FC<{}> = () => {
  return (
    <main className="min-h-[600px] max-w-[940px] p-4 grid grid-cols-4 rouded-xl">
      <Stepper steps={steps} />
      <section className="px-24 py-6 col-span-3 flex flex-col">
        <Heading level="h2" className="mb-2">
          Select your plan
        </Heading>
        <Paragraph className="mb-8">
          You have the option of monthly or yearly billing.
        </Paragraph>
        <form action="">
          <div className="mb-8 grid grid-cols-3 gap-5">
            <PlanRadioButton
              id="plan"
              name="plan"
              content={{
                title: "Arcade",
                label: "$9/mo",
                iconSrc: "/assets/images/icon-arcade.svg",
              }}
              checked={false}
              onChange={() => {}}
            />
            <PlanRadioButton
              id="plan"
              name="plan"
              content={{
                title: "Advanced",
                label: "$12/mo",
                iconSrc: "/assets/images/icon-advanced.svg",
              }}
              checked={false}
              onChange={() => {}}
            />
            <PlanRadioButton
              id="plan"
              name="plan"
              content={{
                title: "Pro",
                label: "$15/mo",
                iconSrc: "/assets/images/icon-pro.svg",
              }}
              checked={false}
              onChange={() => {}}
            />
          </div>
          <PeriodSwitch />
        </form>
        <div className="grow flex flex-row-reverse justify-between items-end">
          <Button variant="secondary">Next step</Button>
          <Button variant="ghost">Go back</Button>
        </div>
      </section>
    </main>
  );
};

export default Plan;
