interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const headingStyles = {
  h1: "",
  h2: "text-2xl font-bold text-marine-blue",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const HeadingLevel = level;
  return (
    <HeadingLevel className={headingStyles[level]}>{children}</HeadingLevel>
  );
};

export default Heading;
