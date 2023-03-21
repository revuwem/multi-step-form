import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import FormControl from "../../widgets/FormControl/FormControl";
import { useSubscriptionState } from "../../shared/context/Subscription/SubscriptionContext";

const Info: React.FC<{}> = () => {
  const { state, setState } = useSubscriptionState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubscription>({
    defaultValues: state,
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISubscription> = (data) => {
    setState({ ...state, info: data.info });
    navigate("/plan");
  };

  return (
    <Layout>
      <Heading level="h2" className="mb-2">
        Personal info
      </Heading>
      <Paragraph className="mb-8">
        Please provide your name, email address, and phone number.
      </Paragraph>
      <form action="">
        <FormControl
          id="info.name"
          label="info.name"
          register={register}
          required
          error={!!errors?.info?.name}
          displayedLabel="Name"
          placeholder="e.g. Stephen King"
        />
        <FormControl
          id="info.email"
          label="info.email"
          register={register}
          required
          displayedLabel="Email address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormControl
          id="info.phone"
          label="info.phone"
          register={register}
          required
          displayedLabel="Phone number"
          placeholder="e.q. +1 234 567 890"
        />
      </form>
      <div className="grow flex flex-row-reverse items-end">
        <Button onClick={handleSubmit(onSubmit)} variant="secondary">
          Next step
        </Button>
      </div>
    </Layout>
  );
};

export default Info;
