interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const headingStyles = {
  h1: "",
  h2: "text-2xl font-bold text-marine-blue",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
}) => {
  const HeadingLevel = level;
  return (
    <HeadingLevel className={[headingStyles[level], className].join(" ")}>
      {children}
    </HeadingLevel>
  );
};

export default Heading;
