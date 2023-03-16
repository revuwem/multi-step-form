interface ISubscription {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  plan: IPlan | null;
  addons: IAddon[] | null;
  period: "monthly" | "yearly";
}

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

