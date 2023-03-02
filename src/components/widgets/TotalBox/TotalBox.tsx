interface TotalBoxProps {
  period: string;
  plan: {
    name: string;
    price: string;
  };
  addons: {
    name: string;
    price: string;
  }[];
  total: string;
}

const TotalBox: React.FC<TotalBoxProps> = ({ period, plan, addons, total }) => {
  return (
    <section>
      {/* details */}
      <div className="p-5 mb-2 bg-alabaster rounded">
        {/* plan */}
        <section className="flex items-center">
          <div className="grow">
            <p className="text-base text-marine-blue font-medium">
              {plan.name}
            </p>
            <a href="" className="text-sm text-cool-gray hover:underline">
              Change
            </a>
          </div>
          <p className="text-base text-marine-blue font-medium">{plan.price}</p>
        </section>
        {/* divider */}
        <div className="border-t border-magnolia mt-5 mb-4" />
        {/* addons */}
        <section>
          <ul className="list-none grid gap-3">
            {addons.map((addon) => (
              <li className="flex items-center">
                <p className="text-sm text-cool-gray grow">{addon.name}</p>
                <p className="text-sm text-marine-blue">{addon.price}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* total */}
      <section className="p-5 flex items-center">
        <p className="text-sm text-cool-gray grow">Total (per {period})</p>
        <p className="text-lg font-bold text-purplish-blue">{total}</p>
      </section>
    </section>
  );
};

export default TotalBox;
