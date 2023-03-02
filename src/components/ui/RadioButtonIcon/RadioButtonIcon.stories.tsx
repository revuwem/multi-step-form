import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButtonIcon from "./RadioButtonIcon";

export default {
  title: "UI/RadioButtonIcon",
  component: RadioButtonIcon,
} as ComponentMeta<typeof RadioButtonIcon>;

const Template: ComponentStory<typeof RadioButtonIcon> = (args) => (
  <RadioButtonIcon {...args} />
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
