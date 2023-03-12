import { Link } from "react-router-dom";
import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import FormControl from "../../widgets/FormControl/FormControl";

const Info: React.FC<{}> = () => {
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
        <Button as={Link} to="/plan" variant="secondary">
          Next step
        </Button>
      </div>
    </Layout>
  );
};

export default Info;
