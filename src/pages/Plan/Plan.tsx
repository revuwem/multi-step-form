import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import PeriodSwitch from "../../features/PeriodSwitch/PeriodSwitch";
import PlanRadioButton from "../../features/PlanRadioButton/PlanRadioButton";
import { Link, useNavigate } from "react-router-dom";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";
import { getSubscriptionPlan } from "../../shared/api";

const Plan: React.FC<{}> = () => {
  const {
    data: planData,
    error,
    isLoading,
  } = useSWR<IPlan[]>("/subscription/plan", getSubscriptionPlan);

  const { state, setState } = useSubscriptionState();
  const { handleSubmit, control } = useForm<ISubscription>({
    defaultValues: state,
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISubscription> = (data) => {
    setState({ ...state, plan: data.plan, period: data.period });
    navigate("/addons");
  };

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
          {planData &&
            planData.length > 0 &&
            planData.map((plan) => (
              <PlanRadioButton
                key={`plan-${plan.id}`}
                id={`plan-${plan.id}`}
                name="plan"
                value={plan.id}
                control={control}
                content={{
                  title: plan.name,
                  label: `$${plan.price[state.period]}/${state.period}`,
                  iconSrc: plan.icon,
                }}
              />
            ))}
        </div>
        <PeriodSwitch name="period" control={control} />
      </form>
      <div className="grow flex flex-row-reverse justify-between items-end">
        <Button onClick={handleSubmit(onSubmit)} variant="secondary">
          Next step
        </Button>
        <Button as={Link} to="/" variant="ghost">
          Go back
        </Button>
      </div>
    </Layout>
  );
};

export default Plan;
