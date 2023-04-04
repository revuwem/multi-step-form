import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";
import { getSubscriptionAddons, getSubscriptionPlan } from "../../shared/api";
import useSWR from "swr";
import { useMemo } from "react";

const Summary: React.FC<{}> = () => {
  const { state } = useSubscriptionState();
  const { data: planData } = useSWR<IPlan[]>(
    "subscription/plan",
    getSubscriptionPlan
  );
  const { data: addonsData } = useSWR<IAddon[]>(
    "subscription/addons",
    getSubscriptionAddons
  );

  const selectedPlan = useMemo(
    () => planData?.filter((data) => data.id === state.plan)[0],
    [state, planData]
  );

  const selectedAddons = useMemo(
    () => addonsData?.filter((data) => state.addons[data.id]),
    [state, addonsData]
  );

  console.log(selectedAddons);

  const total = useMemo(() => {
    const totalPlan = selectedPlan ? selectedPlan.price[state.period] : 0;
    const totalAddons = selectedAddons
      ? selectedAddons.reduce(
          (sum, addon) => sum + Number(addon.price[state.period]),
          0
        )
      : 0;
    const totalPrice = totalPlan + totalAddons;
    return totalPrice;
  }, [selectedPlan, selectedAddons, state]);

  return (
    <Layout>
      <Heading level="h2" className="mb-2">
        Finishing up
      </Heading>
      <Paragraph className="mb-8">
        Double-check everything looks OK before confirming.
      </Paragraph>
      <section>
        {/* details */}
        <div className="p-5 mb-2 bg-alabaster rounded">
          {/* plan */}
          <section className="flex items-center">
            <div className="grow">
              <p className="text-base text-marine-blue font-medium">
                {selectedPlan?.name || ""} (
                {state.period === "month" ? "Monthly" : "Yearly"})
              </p>
              <Link
                to="/plan"
                className="text-sm text-cool-gray hover:underline"
              >
                Change
              </Link>
            </div>
            <p className="text-base text-marine-blue font-medium">
              {`$${selectedPlan?.price[state.period]}/${
                state.period === "month" ? "mo" : "yr"
              }`}
            </p>
          </section>
          {/* divider */}
          <div className="border-t border-magnolia mt-5 mb-4" />
          {/* addons */}
          <section>
            <ul className="list-none grid gap-3">
              {selectedAddons?.map((addon) => (
                <li className="flex items-center">
                  <p className="text-sm text-cool-gray grow">{addon.name}</p>
                  <p className="text-sm text-marine-blue">{`$${
                    addon.price[state.period]
                  }/${state.period === "month" ? "mo" : "yr"}`}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {/* total */}
        <section className="p-5 flex items-center">
          <p className="text-sm text-cool-gray grow">
            Total (per {state.period})
          </p>
          <p className="text-lg font-bold text-purplish-blue">{`$${total}/${
            state.period === "month" ? "mo" : "yr"
          }`}</p>
        </section>
      </section>
      <div className="flex flex-row-reverse justify-between items-end pt-6">
        <Button as={Link} to="/success">
          Confirm
        </Button>
        <Button as={Link} to="/addons" variant="ghost">
          Go back
        </Button>
      </div>
    </Layout>
  );
};

export default Summary;
