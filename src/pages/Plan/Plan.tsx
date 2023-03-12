import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import PeriodSwitch from "../../features/PeriodSwitch/PeriodSwitch";
import PlanRadioButton from "../../features/PlanRadioButton/PlanRadioButton";

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
    <Layout>
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
    </Layout>
  );
};

export default Plan;
