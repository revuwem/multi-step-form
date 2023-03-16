interface ISubscription {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  plan: IPlan | null;
  addons: IAddon[] | null;
  period: SubscriptionPeriod;
}

type SubscriptionPeriod = "month" | "year"

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

