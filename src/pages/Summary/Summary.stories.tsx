import { ComponentMeta, ComponentStory } from "@storybook/react";
import Summary from "./Summary";

export default {
  title: "Pages/Summary",
  component: Summary,
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = (args) => (
  <Summary {...args} />
);

export const Default = Template.bind({});
