interface SwitchProps {
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <div>
      <input type="checkbox" className="hidden" {...props} />
      <div className="w-10 h-5 p-1 bg-marine-blue rounded-xl flex items-center">
        <span
          className={[
            "block w-3 h-3 bg-white rounded-full transition",
            props.checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        ></span>
      </div>
    </div>
  );
};

export default Switch;
