const TotalBox: React.FC<{}> = () => {
  return (
    <section>
      {/* details */}
      <div className="p-5 mb-2 bg-alabaster rounded">
        {/* plan */}
        <section className="flex items-center">
          <div className="grow">
            <p className="text-base text-marine-blue font-medium">
              Arcade (monthly)
            </p>
            <a href="" className="text-sm text-cool-gray hover:underline">
              Change
            </a>
          </div>
          <p className="text-base text-marine-blue font-medium">$9/mo</p>
        </section>
        {/* divider */}
        <div className="border-t border-magnolia mt-5 mb-4" />
        {/* addons */}
        <section>
          <ul className="list-none grid gap-3">
            <li className="flex items-center">
              <p className="text-sm text-cool-gray grow">Online service</p>
              <p className="text-sm text-marine-blue">+$1/mo</p>
            </li>
            <li className="flex items-center">
              <p className="text-sm text-cool-gray grow">Larger storage</p>
              <p className="text-sm text-marine-blue">+$2/mo</p>
            </li>
          </ul>
        </section>
      </div>
      {/* total */}
      <section className="p-5 flex items-center">
        <p className="text-sm text-cool-gray grow">Total (per month)</p>
        <p className="text-lg font-bold text-purplish-blue">$12/mo</p>
      </section>
    </section>
  );
};

export default TotalBox;
