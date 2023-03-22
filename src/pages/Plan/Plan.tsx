import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import PeriodSwitch from "../../features/PeriodSwitch/PeriodSwitch";
import PlanRadioButton from "../../features/PlanRadioButton/PlanRadioButton";
import { Link, useNavigate } from "react-router-dom";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";
import { SubmitHandler, useForm } from "react-hook-form";

const Plan: React.FC<{}> = () => {
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
          <PlanRadioButton
            id="plan-arcade"
            name="plan"
            value="arcade"
            control={control}
            content={{
              title: "Arcade",
              label: "$9/mo",
              iconSrc: "/assets/images/icon-arcade.svg",
            }}
          />
          <PlanRadioButton
            id="plan-advanced"
            name="plan"
            value="advanced"
            control={control}
            content={{
              title: "Advanced",
              label: "$12/mo",
              iconSrc: "/assets/images/icon-advanced.svg",
            }}
          />
          <PlanRadioButton
            id="plan-pro"
            name="plan"
            value="pro"
            control={control}
            content={{
              title: "Pro",
              label: "$15/mo",
              iconSrc: "/assets/images/icon-pro.svg",
            }}
          />
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
