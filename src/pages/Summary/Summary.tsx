import Layout from "../../features/Layout/Layout";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import TotalBox from "../../features/TotalBox/TotalBox";

const Summary: React.FC<{}> = () => {
  return (
    <Layout>
      <Heading level="h2" className="mb-2">
        Finishing up
      </Heading>
      <Paragraph className="mb-8">
        Double-check everything looks OK before confirming.
      </Paragraph>
      <TotalBox
        period="yearly"
        plan={{ name: "Arcade", price: "+$90/yr" }}
        addons={[
          { name: "Online Service", price: "+$10/yr" },
          { name: "Larger storage", price: "+$20/yr" },
        ]}
        total="$100/yr"
      />
      <div className="flex flex-row-reverse justify-between items-end">
        <Button variant="primary">Confirm</Button>
        <Button variant="ghost">Go back</Button>
      </div>
    </Layout>
  );
};

export default Summary;
