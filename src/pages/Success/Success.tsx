import Layout from "../../features/Layout/Layout";
import UIMessage from "../../ui/UIMessage/UIMessage";

const Summary: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="row-span-full self-center">
        <UIMessage
          title="Thank you!"
          message="Thanks for confirming your subscription! We hope you have
                fun using our platform. If you ever need support, please feel
                free to email us at support@loremgaming.com."
          iconSrc="/assets/images/icon-thank-you.svg"
        />
      </div>
    </Layout>
  );
};

export default Summary;
