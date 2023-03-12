const ButtonDefaultAsType = "button" as const;

interface ButtonBaseProps<E extends React.ElementType> {
  as?: E;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

type ButtonProps<E extends React.ElementType> = ButtonBaseProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonBaseProps<E>>;

const ButtonClassNames = {
  base: "font-md capitalize font-medium py-3 px-6 rounded-lg transition focus-visible:outline-purplish-blue",
  variant: {
    primary: "text-white bg-purplish-blue hover:bg-pastel-blue",
    secondary: "text-white bg-marine-blue hover:bg-carbon-blue",
    ghost: "text-cool-gray bg-transparent hover:text-marine-blue",
  },
};

const Button = <E extends React.ElementType = typeof ButtonDefaultAsType>({
  variant = "primary",
  as,
  children,
  ...props
}: ButtonProps<E>) => {
  const Component = as || ButtonDefaultAsType;
  return (
    <Component
      className={[
        ButtonClassNames.base,
        ButtonClassNames.variant[variant],
      ].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
