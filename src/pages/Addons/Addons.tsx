import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import AddonCheckbox from "../../features/AddonCheckbox/AddonCheckbox";
import Layout from "../../features/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";
import { SubmitHandler, useForm } from "react-hook-form";

const Addons: React.FC<{}> = () => {
  const { state, setState } = useSubscriptionState();
  const { handleSubmit, control } = useForm<ISubscription>({
    defaultValues: state,
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISubscription> = (data) => {
    setState({ ...state, addons: data.addons });
    navigate("/summary");
  };

  return (
    <Layout>
      <Heading level="h2" className="mb-2">
        Pick add-ons
      </Heading>
      <Paragraph className="mb-8">
        Add-ons help enhance your gaming experience.
      </Paragraph>
      <form action="">
        <div className="grid gap-4">
          <AddonCheckbox
            id="addon-1"
            name="addons"
            control={control}
            content={{
              title: "Online Service",
              label: "Access to multiplayer games",
              price: "+$1/mo",
            }}
          />
          <AddonCheckbox
            id="addon-2"
            name="addons"
            control={control}
            content={{
              title: "Larger storage",
              label: "Extra 1TB of cloud save",
              price: "+$2/mo",
            }}
          />
          <AddonCheckbox
            id="addon-3"
            name="addons"
            control={control}
            content={{
              title: "Customizable profile",
              label: "Custom theme on your profile",
              price: "+$2/mo",
            }}
          />
        </div>
      </form>
      <div className="grow flex flex-row-reverse justify-between items-end">
        <Button onClick={handleSubmit(onSubmit)} variant="secondary">
          Next step
        </Button>
        <Button as={Link} to="/plan" variant="ghost">
          Go back
        </Button>
      </div>
    </Layout>
  );
};

export default Addons;
