import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorLabel from "./ErrorLabel";

export default {
  title: "UI/ErrorLabel",
  component: ErrorLabel,
} as ComponentMeta<typeof ErrorLabel>;

const Template: ComponentStory<typeof ErrorLabel> = (args) => (
  <ErrorLabel {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "ErrorLabel",
};
