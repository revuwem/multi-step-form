interface ISubscription {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  plan: number | undefined;
  addons: SubscriptionAddons;
  period: SubscriptionPeriod;
}

type SubscriptionPeriod = "month" | "year";
type SubscriptionAddons = {
  [key: string]: boolean;
};

interface IPlan {
  id: number;
  name: string;
  icon: string;
  price: {
    month: number;
    year: number;
  };
  specialOffer: {
    month?: string;
    year?: string;
  }
}

interface IAddon {
  id: number;
  name: string;
  description?: string;
  price: {
    month: number;
    year: number;
  };
}
