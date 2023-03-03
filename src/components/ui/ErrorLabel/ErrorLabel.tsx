interface ErrorLabelProps {
  children: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ children }) => {
  return (
    <span className="text-sm font-medium text-strawberry-red">{children}</span>
  );
};

export default ErrorLabel;
