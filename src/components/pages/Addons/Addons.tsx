import PeriodSwitch from "../../features/PeriodSwitch";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import AddonCheckbox from "../../widgets/AddonCheckbox/AddonCheckbox";
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

const Addons: React.FC<{}> = () => {
  return (
    <main className="min-h-[600px] max-w-[940px] p-4 grid grid-cols-4 rouded-xl">
      <Stepper steps={steps} />
      <section className="px-24 py-6 col-span-3 flex flex-col">
        <Heading level="h2" className="mb-2">
          Pick add-ons
        </Heading>
        <Paragraph className="mb-8">
          Add-ons help enhance your gaming experience.
        </Paragraph>
        <form action="">
          <div className="grid gap-4">
            <AddonCheckbox
              id="addon"
              name="addon"
              content={{
                title: "Online Service",
                label: "Access to multiplayer games",
                price: "+$1/mo",
              }}
              checked={false}
              onChange={() => {}}
            />
            <AddonCheckbox
              id="addon"
              name="addon"
              content={{
                title: "Larger storage",
                label: "Extra 1TB of cloud save",
                price: "+$2/mo",
              }}
              checked={false}
              onChange={() => {}}
            />
            <AddonCheckbox
              id="addon"
              name="addon"
              content={{
                title: "Customizable profile",
                label: "Custom theme on your profile",
                price: "+$2/mo",
              }}
              checked={false}
              onChange={() => {}}
            />
          </div>
        </form>
        <div className="grow flex flex-row-reverse justify-between items-end">
          <Button variant="secondary">Next step</Button>
          <Button variant="ghost">Go back</Button>
        </div>
      </section>
    </main>
  );
};

export default Addons;
