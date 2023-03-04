import UIMessage from "../../ui/UIMessage/UIMessage";
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

const Summary: React.FC<{}> = () => {
  return (
    <main className="min-h-[600px] max-w-[940px] p-4 grid grid-cols-4 rouded-xl">
      <Stepper steps={steps} />
      <section className="px-24 py-6 col-span-3 grid place-items-center">
        <UIMessage
          title="Thank you!"
          message="Thanks for confirming your subscription! We hope you have
                fun using our platform. If you ever need support, please feel
                free to email us at support@loremgaming.com."
          iconSrc="/assets/images/icon-thank-you.svg"
        />
      </section>
    </main>
  );
};

export default Summary;
