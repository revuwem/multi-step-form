import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "./Stepper";

export default {
  title: "Features/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  steps: [
    {
      number: "1",
      label: "Your info",
      path: "/",
    },
    {
      number: "2",
      label: "Select plan",
      path: "/plan",
    },
    {
      number: "3",
      label: "Add-ons",
      path: "/addons",
    },
  ],
};
