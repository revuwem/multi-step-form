interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="text-base text-cool-gray">{children}</p>;
};

export default Paragraph;
