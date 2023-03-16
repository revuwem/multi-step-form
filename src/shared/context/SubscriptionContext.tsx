import React, { createContext, useContext, useState } from "react";

// Default value
const subscriptionDefaultValue = {
  state: {
    info: {
      name: "",
      email: "",
      phone: "",
    },
    plan: null,
    addons: null,
    period: "month",
  } as ISubscription,
  setState: (state: ISubscription) => {},
};

// Context
export const SubscriptionContext = createContext(subscriptionDefaultValue);

// Context Provider
export const SubscriptionContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState(subscriptionDefaultValue.state);

  return (
    <SubscriptionContext.Provider value={state}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// Use context state hook
export const useSubscriptionState = () => {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw new Error(
      "useSubscriptionState must be used within the SubscriptionProvider"
    );
  }

  return context;
};
