import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import AddonCheckbox from "../../features/AddonCheckbox/AddonCheckbox";
import Layout from "../../features/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";
import { getSubscriptionAddons } from "../../shared/api";

const Addons: React.FC<{}> = () => {
  const {
    data: addonsData,
    error,
    isLoading,
  } = useSWR<IAddon[]>("subscription/addons", getSubscriptionAddons);
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
          {addonsData &&
            addonsData.length > 0 &&
            addonsData.map((addon) => (
              <AddonCheckbox
                id={`addon-${addon.id}`}
                name="addons"
                value={addon.id}
                control={control}
                content={{
                  ...addon,
                  price: addon.price[state.period],
                  period: state.period === "month" ? "mo" : "yr",
                }}
              />
            ))}
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
