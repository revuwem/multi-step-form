import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlanRadioButton from "./PlanRadioButton";

export default {
  title: "Widgets/PlanRadioButton",
  component: PlanRadioButton,
} as ComponentMeta<typeof PlanRadioButton>;

const Template: ComponentStory<typeof PlanRadioButton> = (args) => (
  <PlanRadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  name: "plan",
  checked: false,
  content: {
    icon: "/assets/images/icon-arcade.svg",
    name: "Arcade",
    price: 9,
    period: "mo",
    note: "",
  },
};

export const WithNote = Template.bind({});
WithNote.args = {
  id: "1",
  content: {
    icon: "/assets/images/icon-arcade.svg",
    name: "Arcade",
    price: 90,
    period: "yr",
    note: "2 month free",
  },
};
