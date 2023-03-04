interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}

const ButtonClassNames = {
  base: "font-md capitalize font-medium py-3 px-6 rounded-lg transition focus-visible:outline-purplish-blue",
  variant: {
    primary: "text-white bg-purplish-blue hover:bg-pastel-blue",
    secondary: "text-white bg-marine-blue hover:bg-carbon-blue",
    ghost: "text-cool-gray bg-transparent hover:text-marine-blue",
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <button
      className={[
        ButtonClassNames.base,
        ButtonClassNames.variant[variant],
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
