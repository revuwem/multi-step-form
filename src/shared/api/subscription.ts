export const getSubscriptionPlan = () => fetch("/data/plan.json").then(res=>res.json());

export const getSubscriptionAddons = () => fetch("/data/addons.json").then(res=>res.json());