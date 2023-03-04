import PeriodSwitch from "../../features/PeriodSwitch/PeriodSwitch";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import Stepper from "../../widgets/Stepper/Stepper";
import TotalBox from "../../widgets/TotalBox/TotalBox";

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

const Summary: React.FC<{}> = () => {
  return (
    <main className="min-h-[600px] max-w-[940px] p-4 grid grid-cols-4 rouded-xl">
      <Stepper steps={steps} />
      <section className="px-24 py-6 col-span-3 flex flex-col">
        <Heading level="h2" className="mb-2">
          Finishing up
        </Heading>
        <Paragraph className="mb-8">
          Double-check everything looks OK before confirming.
        </Paragraph>
        <TotalBox
          period="yearly"
          plan={{ name: "Arcade", price: "+$90/yr" }}
          addons={[
            { name: "Online Service", price: "+$10/yr" },
            { name: "Larger storage", price: "+$20/yr" },
          ]}
          total="$100/yr"
        />
        <div className="grow flex flex-row-reverse justify-between items-end">
          <Button variant="secondary">Next step</Button>
          <Button variant="ghost">Go back</Button>
        </div>
      </section>
    </main>
  );
};

export default Summary;
