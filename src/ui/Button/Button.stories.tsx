import { ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button>Label</Button>;
export const Secondary = () => <Button variant="secondary">Label</Button>;
export const Ghost = () => <Button variant="ghost">Label</Button>;
