interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p className={["text-base text-cool-gray", className].join(" ")}>
      {children}
    </p>
  );
};

export default Paragraph;
