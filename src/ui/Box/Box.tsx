interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg shadow-light-gray">
      {children}
    </div>
  );
};

export default Box;
