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
};
