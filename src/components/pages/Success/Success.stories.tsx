import { ComponentMeta, ComponentStory } from "@storybook/react";
import Success from "./Success";

export default {
  title: "Pages/Success",
  component: Success,
} as ComponentMeta<typeof Success>;

const Template: ComponentStory<typeof Success> = (args) => (
  <Success {...args} />
);

export const Default = Template.bind({});
