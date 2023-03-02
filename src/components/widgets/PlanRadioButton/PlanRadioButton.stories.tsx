import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlanRadioButton from "./PlanRadioButton";

export default {
  title: "UI/PlanRadioButton",
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
    iconSrc: "public/assets/images/icon-arcade.svg",
    title: "Arcade",
    label: "$90/yr",
    note: "",
  },
};

export const WithNote = Template.bind({});
WithNote.args = {
  id: "1",
  name: "plan",
  checked: false,
  content: {
    iconSrc: "/assets/images/icon-arcade.svg",
    title: "Arcade",
    label: "$90/yr",
    note: "2 month free",
  },
};
