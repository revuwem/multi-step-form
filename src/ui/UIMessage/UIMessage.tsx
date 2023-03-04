import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

interface UIMessageProps {
  title: string;
  message: string;
  iconSrc?: string;
}

const UIMessage: React.FC<UIMessageProps> = ({ title, message, iconSrc }) => (
  <section className="grid place-items-center">
    {iconSrc && <img src={iconSrc} alt="" className="max-w-[5rem] mb-8" />}
    <Heading level="h2" className="mb-4">
      {title}
    </Heading>
    <Paragraph className="text-center">{message}</Paragraph>
  </section>
);

export default UIMessage;
