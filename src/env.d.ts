interface ISubscription {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  plan: SubscriptionPlan;
  addons: SubscriptionAddons;
  period: SubscriptionPeriod;
}

type SubscriptionPeriod = "month" | "year"
type SubscriptionPlan = "arcade" | "advanced" | "pro"
type SubscriptionAddons = {
  [key: string]: boolean;
};

interface IPlan {
    id: number;
    name: string;
    price: {
        month: number;
        year: number;
    }
}

interface IAddon {
    id: number;
    name: string;
    description?: string;
    price: {
        month: number;
        year: number;
    }
}

