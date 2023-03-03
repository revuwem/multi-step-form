import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import FormControl from "../../widgets/FormControl/FormControl";
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

const Info: React.FC<{}> = () => {
  return (
    <main className="min-h-[600px] p-4 grid grid-cols-4 rouded-xl">
      <Stepper steps={steps} />
      <section className="px-24 py-6 col-span-3 flex flex-col">
        <Heading level="h2" className="mb-2">
          Personal info
        </Heading>
        <Paragraph className="mb-8">
          Please provide your name, email address, and phone number.
        </Paragraph>
        <form action="">
          <FormControl
            label="Name"
            id="user-name"
            placeholder="e.g. Stephen King"
          />
          <FormControl
            label="Email address"
            id="user-email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <FormControl
            label="Phone number"
            id="user-name"
            placeholder="e.q. +1 234 567 890"
          />
        </form>
        <div className="grow flex flex-row-reverse items-end">
          <Button variant="secondary">Next step</Button>
        </div>
      </section>
    </main>
  );
};

export default Info;
